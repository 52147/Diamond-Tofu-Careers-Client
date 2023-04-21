import React, { useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "../../database/AuthContext";
import { Button, Modal } from "react-bootstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../database/firebase";
import { signInWithGooglePopup } from "../../database/firebase";
import axios from "axios";

export const ApplySuccess = ({ setDocument }) => {
  //   const currentUser = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  //   console.log(currentUser);

  //   const login = useAuth();

  const handleSignIn = async (result) => {

    const response = await axios.post("http://localhost:3000/login/later", result);

    // try {
    //   const response = await signInWithGooglePopup();
    //   const email = response.user.email;
    //   console.log(response.user);
    //   console.log(response.user.uid);
    //   setLoading(true);

    //   const db = getFirestore();
    //   const resumesRef = collection(db, "resumes"); 

    //   try {
    //     const docRef = doc(resumesRef, setDocument); // 用doc() 拿到document idsetDocument is the document ID
    //     const docSnapshot = await getDoc(docRef);
    //     if (docSnapshot.exists()) {
    //       const docData = docSnapshot.data();
    //       // do something with the document data
    //       console.log("hello");
    //       await updateDoc(docRef, { uid: response.user.uid }); // Update the document
    //       console.log("123456");
    //       setShowModal(true);
    //     } else {
    //       console.log("No matching document found");
    //     }
    //   } catch (error) {
    //     console.error("Error updating document:", error);
    //   }

    //   setLoading(false);
    // } catch (error) {
    //   console.error("Error signing in with Google:", error);
    // }
  };

  const handleRegister = async () => {};

  return (
    <>
      <div className="jobdes">
        <div className="container text-center">
          <h1>Application Submitted Successfully!</h1>
          <p>Thank you for your submission.</p>
          Do you still want to register?
          <Button onClick={handleSignIn}>Sign in with Google</Button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully registered.</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
