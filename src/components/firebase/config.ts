// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeAnalytics } from "firebase/analytics";
// import dotenv from "dotenv";
// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASURMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// index.html's gtag snippet already sends the page_view for this same
// measurement ID. Without send_page_view: false, the first logEvent call
// (getAnalytics) re-runs gtag config and counts the page a second time.
initializeAnalytics(app, { config: { send_page_view: false } });

export const storage = getStorage(app);
