# Vue.js Firebase Authentication Project

This project is a Vue.js application that implements user authentication using Firebase. It includes features such as user registration, sign-in, and protected routes.

## Features

- User registration
- User sign-in
- Protected routes
- Responsive design using Tailwind CSS
- Fast development with Vite
- Error handling
- Loading states

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
│   │   └── LoadingSpinner.vue
│   ├── composables/
│   │   └── useAuth.js
│   └── utils/
│       └── errorHandler.js
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

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To create a production build:

```
npm run build
```

This will generate a `dist` folder with your compiled assets.

## Deployment

To deploy your application, you can use various platforms that support static site hosting, such as Firebase Hosting, Netlify, or Vercel. Follow the deployment instructions for your chosen platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

