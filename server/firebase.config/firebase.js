import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"



const firebaseConfig = {
    apiKey: "AIzaSyAAVe_S0kkUlLFsJfi_mrM9oYoGkNsur2g",
    authDomain: "wiselogics-67366.firebaseapp.com",
    projectId: "wiselogics-67366",
    storageBucket: "wiselogics-67366.appspot.com",
    messagingSenderId: "306841719775",
    appId: "1:306841719775:web:a86c622f45341249eaea6a",
    measurementId: "G-9TF3XM1WTE"
  };


  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);