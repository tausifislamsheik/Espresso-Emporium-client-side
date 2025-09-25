// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxWIyd_smCyBILVADJTqt7ZH9gRGO7ZtE",
  authDomain: "espresso-emporium-a4b34.firebaseapp.com",
  projectId: "espresso-emporium-a4b34",
  storageBucket: "espresso-emporium-a4b34.firebasestorage.app",
  messagingSenderId: "815387434406",
  appId: "1:815387434406:web:54ccf652cadfe3f41a0367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);