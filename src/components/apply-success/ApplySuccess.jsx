import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { signInWithGooglePopup } from "../../database/firebase";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const ApplySuccess = ({ setDocument }) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  console.log(setDocument);

  const handleSignIn = async (result) => {
    const role = await signInWithGooglePopup();
    const uid = localStorage.getItem("uid");
    const data = {
      docID: setDocument,
    };
    const res = await axios.post(
      `http://localhost:3000/login/later?uid=${uid}`,
      data
    );
    localStorage.setItem("role", role);

    if (role == 1) {
      navigate("/table");
    } else if (role == 2) {
      navigate("/user");
    }
  };

  return (
    <>
      <div className="jobdes">
        <div className="btn-color container text-center">
          <h1 className="text-violet-700">Application Submitted Successfully!</h1>
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
