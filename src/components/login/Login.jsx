import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { signOut, signInWithGooglePopup } from "../../database/firebase";

export const Login = ({ setUid }) => {
  const [show, setShow] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showNoDoc, setNoDoc] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  console.log(isLoggedIn);
  const uid = localStorage.getItem("uid");

  console.log(uid);

  const handleModalClose = () => setShow(false);
  const handleModalClose2 = () => setShowLogout(false);
  const handleModalClose3 = () => setNoDoc(false);

  const handleGoogleLogin = async () => {
    const role = await signInWithGooglePopup();
    console.log(role);
    localStorage.setItem("role", role);

    if (role == 1) {
      navigate("/table");
    } else if (role == 2) {
      navigate("/user");
    } else if (role == 3) {
      setNoDoc(true);
    }
  };

  const handleSignOut = async () => {
    await signOut(setAuthenticated);
    setShowLogout(true);
    setTimeout(() => {
      window.location.reload();
    }, "1500");
  };

  return (
    <>
      <div className="jobdes">
        <div className="container">
          <h1 className="font-medium text-center text-violet-700">Login</h1>

          <div>
            <button
              className="buttonClass inputClass"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>

            <Modal show={show} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Invalid Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                This email or UID is not authorized to access this page.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleModalClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          {/* <div>
      {user ?
        <p>Welcome, {user.displayName}!</p>
        :
        <p>Please sign in.</p>
      }
    </div> */}

          {isLoggedIn === "true"? (
            <div className="mt-4">
              <button
                className="buttonClass inputClass"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
        <Modal show={showLogout} onHide={handleModalClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>Logout Successfully.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showNoDoc} onHide={handleModalClose3}>
          <Modal.Header closeButton>
            <Modal.Title>No Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>This account do not hava any application.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleModalClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
