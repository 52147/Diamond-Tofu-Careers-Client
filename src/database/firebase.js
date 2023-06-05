import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as signOutAuth,
} from "firebase/auth";
import axios from "axios";

// import firebase1 from 'firebase/compat/app';
// compact nampespace compact 命名方式適用於Firebase v9 向後兼容的版本，新的版本用import module方式
export const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  apiKey: "AIzaSyBU3h0sxwRtCttbizkG5lSMvw6For0Wd6A",
  authDomain: "diamond-tofu-career.firebaseapp.com",
  projectId: "diamond-tofu-career",
  storageBucket: "diamond-tofu-career.appspot.com",
  messagingSenderId: "657730990855",
  appId: "1:657730990855:web:2dc941d2e38b5320e30ba2",
  measurementId: "G-30Q73BL49S",
};

export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoogle = async() =>{
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const uid = user.uid;
  localStorage.setItem("uid", uid);
  localStorage.setItem("isLoggedIn", true);
  return result;
}


export const signInWithGooglePopup = async (id, newStatus) => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const uid = user.uid;
  localStorage.setItem("uid", uid);
  localStorage.setItem("isLoggedIn", true);
  
  const response = await axios.post("https://us-central1-diamond-tofu-career.cloudfunctions.net/api/login", result);
  console.log(response.data);
  return response.data;
};

export const signOut = async (setAuthenticated) => {
  try {
    await signOutAuth(auth);
    localStorage.removeItem("uid");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setAuthenticated(false);
  } catch (error) {
    console.log(error.message);
  }
};

export const isLoggedIn = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true";
};

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in");
    console.log(user);
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});
