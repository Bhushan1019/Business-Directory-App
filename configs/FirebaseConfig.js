// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmdcNimDhvGORcTMveQH5xd2FLIGlfIjs",
  authDomain: "business-listing-app-1.firebaseapp.com",
  projectId: "business-listing-app-1",
  storageBucket: "business-listing-app-1.appspot.com",
  messagingSenderId: "342437428593",
  appId: "1:342437428593:web:1d355e85222b669ed54ad0",
  measurementId: "G-HK2HYMC4GP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
