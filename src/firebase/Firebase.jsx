import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCajNa9FtgePTR5KgZhEFPIGpvgCdzr74k",
    authDomain: "walmart-a03ba.firebaseapp.com",
    projectId: "walmart-a03ba",
    storageBucket: "walmart-a03ba.firebasestorage.app",
    messagingSenderId: "984664583365",
    appId: "1:984664583365:web:236c1af98abfa685df94ac",
    measurementId: "G-5Q6T0ZGWLY"
  };
  const app = initializeApp(firebaseConfig);  
  const auth = getAuth(app);

  export{app,auth};



