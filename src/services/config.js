import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const config = process.env.FIREBASE_CONFIG

const firebaseConfig = {
    apiKey: "AIzaSyDNWoUT4Om4yt-CQzvS5YLo6lxY5uZdSGw",
    authDomain: "portafolio-de015.firebaseapp.com",
    projectId: "portafolio-de015",
    storageBucket: "portafolio-de015.appspot.com",
    messagingSenderId: "1029847098645",
    appId: "1:1029847098645:web:492509ba16b3d98f7a751c",
    measurementId: "G-XTBVG0ZVQK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);