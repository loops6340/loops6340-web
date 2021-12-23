import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { Momentazo } from "../types/momentazos";

const firebaseConfig = {
    apiKey: "AIzaSyDTHxetIV6ghs_p1UKCKVmLHyedu4Quc9o",
    authDomain: "momentazos-app.firebaseapp.com",
    projectId: "momentazos-app",
    storageBucket: "momentazos-app.appspot.com",
    messagingSenderId: "513484050817",
    appId: "1:513484050817:web:739b681b4759a978989880",
    measurementId: "G-WWLMLZES5M"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

async function getMomentazos() {
    const momentazosCol = collection(db, 'momentazos');
    const momentazosSnapshot = await getDocs(momentazosCol);
    const momentazosList = momentazosSnapshot.docs.map(doc => doc.data());
    return momentazosList;
}

async function postMomentazos(momentazo: Momentazo) {
    await addDoc(collection(db, 'momentazos'), momentazo)
}

export { db, getMomentazos, postMomentazos }