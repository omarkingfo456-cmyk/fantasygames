import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSs1xHQlUB4EdJn70R_izq0QtIgW9gskU",
  authDomain: "fantasy-games-3a3f0.firebaseapp.com",
  projectId: "fantasy-games-3a3f0",
  storageBucket: "fantasy-games-3a3f0.firebasestorage.app",
  messagingSenderId: "281763153439",
  appId: "1:281763153439:web:d72656c666ffea97dfb72a",
  measurementId: "G-X54EQL7640"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
