import { initializeApp } from "firebase/app";

// db
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoY45Kna1e9yZzWdkua_6ybdn0o_H3pzw",
  authDomain: "kevincollazos-fa754.firebaseapp.com",
  projectId: "kevincollazos-fa754",
  storageBucket: "kevincollazos-fa754.appspot.com",
  messagingSenderId: "772939214224",
  appId: "1:772939214224:web:569b1f1138d875a013d715",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
