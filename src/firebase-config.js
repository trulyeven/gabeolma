// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANusLrt3_AqHSLcMYOq1q-PcCYrYz9t2w",
  authDomain: "gabeolma.firebaseapp.com",
  databaseURL: "https://gabeolma-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gabeolma",
  storageBucket: "gabeolma.appspot.com",
  messagingSenderId: "736809144494",
  appId: "1:736809144494:web:3a1a52d7c9818f147a5d3f",
  measurementId: "G-5RPZXMZET0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// 사용하기 위해 export
export const db = getFirestore(app);