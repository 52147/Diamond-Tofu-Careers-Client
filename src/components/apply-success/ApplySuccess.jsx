import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { signInWithGoogle } from "../../database/firebase";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const ApplySuccess = ({ setDocument }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const [showModal, setShowModal] = useState(false);
  console.log(setDocument);

  const handleSignIn = async () => {
    const result = await signInWithGoogle();
    const uid = localStorage.getItem("uid");
    const data = {
      docID: setDocument,
    };
    await axios.post(`
    https://us-central1-diamond-tofu-career.cloudfunctions.net/api/login/later?uid=${uid}`, data);
    const role = localStorage.setItem("role", 2);
    navigate("/user");

  };
  


  return (
    <>
      <div className="jobdes">
        <div className="btn-color container text-center">
          <h1 className="text-violet-700">
            Application Submitted Successfully!
          </h1>
          <p>Thank you for your submission.</p>
          {!isLoggedIn ? (
            <div>
              <p>Do you still want to register?</p>
              <Button onClick={handleSignIn}>Sign in with Google</Button>
            </div>
          ) : null}
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
