# Vue.js Firebase Authentication Project

This project is a Vue.js application that implements secure user authentication using Firebase. It includes features such as user registration with password strength validation, sign-in, protected routes, rate limiting, and error logging.

## Features

- User registration with password strength check
- User sign-in with email and password
- Protected routes for authenticated users
- Rate limiting for authentication attempts
- Error boundaries for graceful error handling
- Input sanitization to prevent XSS attacks
- Responsive design using Tailwind CSS
- Fast development with Vite
- Error logging with Sentry
- Content Security Policy (CSP) implementation

## File Structure

```
project-root/
│
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── index.css
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   ├── SignIn.vue
│   │   └── Registration.vue
│   ├── components/
│   │   ├── LoadingSpinner.vue
│   │   └── ErrorBoundary.vue
│   ├── composables/
│   │   └── useAuth.js
│   └── utils/
│       ├── errorHandler.js
│       └── sanitize.js
├── functions/
│   ├── index.js
│   └── rateLimiter.js
├── public/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── mask-icon.svg
├── .env
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- A Firebase project with authentication enabled
- A Sentry account for error logging

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/vue-firebase-auth-project.git
   cd vue-firebase-auth-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase and Sentry configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_SENTRY_DSN=your_sentry_dsn
   ```

4. Deploy the Firebase Cloud Function for rate limiting:
   ```
   npm run deploy:functions
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To create a production build:

```
npm run build
```

This will generate a `dist` folder with your compiled assets.

## Deployment

To deploy your application, you can use various platforms that support static site hosting, such as Firebase Hosting, Netlify, or Vercel. Follow the deployment instructions for your chosen platform.

Remember to also deploy your Firebase Cloud Functions:

```
npm run deploy:functions
```

## Security Features

### Content Security Policy (CSP)
Implemented in `index.html` to mitigate XSS and other injection attacks.

### Password Strength Validation
Uses `zxcvbn` in `src/views/Registration.vue` to ensure users create strong passwords.

### Rate Limiting
Implemented via Firebase Cloud Functions in `functions/rateLimiter.js` to prevent brute-force attacks. The function is exported in `functions/index.js`.

### Input Sanitization
Uses DOMPurify in `src/utils/sanitize.js` to sanitize user inputs and prevent XSS attacks.

### Error Boundaries
Implemented in `src/components/ErrorBoundary.vue` to gracefully handle and display errors without crashing the application.

## Error Logging

This project uses Sentry for error logging. Ensure you've set up a Sentry account and added your DSN to the `.env` file. The Sentry configuration is in `src/main.js`.

## Vue Router

Client-side routing is configured in `src/router/index.js`. It includes route guards to protect authenticated routes.

## Composables

The `useAuth` composable in `src/composables/useAuth.js` encapsulates Firebase authentication logic for use across components.

## Styling

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Vue.js](https://vuejs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Sentry](https://sentry.io/)
- [zxcvbn](https://github.com/dropbox/zxcvbn)
- [DOMPurify](https://github.com/cure53/DOMPurify)

