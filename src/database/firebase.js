import { useCallback, useEffect, useState } from "react";
import { initializeApp, firebase } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
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
export const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = async (id, newStatus) => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const uid = user.uid;
  localStorage.setItem("uid", uid);
  localStorage.setItem("isLoggedIn", true);

  const response = await axios.post("http://localhost:3000/login", result);
  console.log(response.data);
  return response.data;
};

// export const signInWithGooglePopup = async (setUid, navigate) => {
//   try {
//     const user = result.user;
//     const uid = user.uid;
//     localStorage.setItem("uid", uid);
//     localStorage.setItem("isLoggedIn", true);

//     const email = user.email;

//     const querySnapshot = await getDocs(collection(db, "access"));
//     const documents = querySnapshot.docs;
//     const matchingDocument = documents.find(
//       (doc) => doc.data().email === email
//     );

//     if (matchingDocument) {
//       console.log("Email is authorized.");
//       // setUid(uid);
//       // navigate("/table");
//       localStorage.setItem("role", "1");
//       return "1"
//     } else {
//       console.log("Email is not authorized. Checking UID...");
//       const resumesCollection = collection(db, "resumes");
//       const resumesSnapshot = await getDocs(resumesCollection);
//       const resumes = resumesSnapshot.docs;
//       const matchingResume = resumes.find(
//         (resume) => resume.data().uid === uid
//       );

//       if (matchingResume) {
//         console.log("UID is authorized.");
//         // setUid(uid);
//         // navigate("/user");
//         localStorage.setItem("role", "2");
//         return "2"
//       } else {
//         console.log("UID is not authorized.");
//         // do something if UID is not authorized
//       }
//     }

//     return user;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

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
