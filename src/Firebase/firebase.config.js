// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChL0zE70L0ov1-wq4df9sU1d4nyHDyIvc",
  authDomain: "travel-booking-auth.firebaseapp.com",
  projectId: "travel-booking-auth",
  storageBucket: "travel-booking-auth.appspot.com",
  messagingSenderId: "384969210105",
  appId: "1:384969210105:web:b9faefaf8fe3424ac50a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;