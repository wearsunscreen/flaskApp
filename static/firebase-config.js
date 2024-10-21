import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsvcPHKuDRKHRNFXoqOhhTqhCjTlRWH2c",
  authDomain: "flask-test-985c6.firebaseapp.com",
  projectId: "flask-test-985c6",
  storageBucket: "flask-test-985c6.appspot.com",
  messagingSenderId: "231063675395",
  appId: "1:231063675395:web:ea7e98c5692e72f1cc2436",
  measurementId: "G-74ET9Z99QC"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };