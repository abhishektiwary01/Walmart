import { createUserWithEmailAndPassword,GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase";


export const createUserWithEmailAndPassword = async(email, password)=>{
 return createUserWithEmailAndPassword(auth,email,password);
}

export const doSignInwithEmailAndPassword = async (email, password) => {
    return firebaseSignInWithEmailAndPassword(auth, email, password);
  };
  

export const doSignWithGoogle = async() =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    return result;
}

export const doSignOut=()=>{
    return auth.signOut();
}