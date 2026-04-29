import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID",
};

export const app = initializeApp(firebaseConfig);
