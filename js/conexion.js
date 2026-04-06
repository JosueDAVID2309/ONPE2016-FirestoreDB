import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBxnpQ5_wobWHt6L-hj32uALUFAGNYQ43Q",
    authDomain: "josue-onpe.firebaseapp.com",
    projectId: "josue-onpe",
    storageBucket: "josue-onpe.firebasestorage.app",
    messagingSenderId: "746940817157",
    appId: "1:746940817157:web:2b20488f8cb0b22c41a16c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);