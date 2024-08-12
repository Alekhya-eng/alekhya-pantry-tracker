import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD76GN6-zCJXkg3IE992RN8B3Xm2j7oN7M",
  authDomain: "inventory-pantry-b6cc3.firebaseapp.com",
  projectId: "inventory-pantry-b6cc3",
  storageBucket: "inventory-pantry-b6cc3.appspot.com",
  messagingSenderId: "380172288538",
  appId: "1:380172288538:web:b9025ec4ea7f7c0286c7a3",
  measurementId: "G-E1LFDEZDNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Define analytics variable
let analytics;

// Initialize Firebase Analytics only on the client side
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, analytics, firestore, auth };
