const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.rateLimiter = functions.https.onRequest((req, res) => {
  const ip = req.ip;
  const db = admin.database();
  const ref = db.ref(`rateLimit/${ip}`);
  
  return ref.transaction((current) => {
    if (current && current.count >= 5 && Date.now() - current.timestamp < 60000) {
      throw new functions.https.HttpsError('resource-exhausted', 'Too many requests');
    }
    return {count: (current && current.count || 0) + 1, timestamp: Date.now()};
  }).then(() => {
    res.status(200).send('Request processed');
  }).catch((error) => {
    if (error.code === 'resource-exhausted') {
      res.status(429).send('Too many requests');
    } else {
      res.status(500).send('Internal server error');
    }
  });
});
