import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

export const UserProfileForm = ({ user }) => {
  const [resume, setResume] = useState(user.resume);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);

  const uid = localStorage.getItem("uid");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !phone || !address || !resume) {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
      return;
    }
    const updatedUser = {
      email,
      phone,
      address,
      resume,
    };
    const response = await axios.post(
      `http://localhost:3000/profile/update?uid=${uid}`,
      updatedUser
    );
    window.location.reload();
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="email" className="text-lg font-bold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form-control mt-2"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="text-lg font-bold">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          className="form-control mt-2"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address" className="text-lg font-bold">
          Address:
        </label>
        <input
          type="text"
          id="address"
          className="form-control mt-2"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="resume" className="text-lg font-bold">
          Resume Link:
        </label>
        <input
          type="text"
          id="resume"
          className="form-control mt-2"
          value={resume}
          onChange={(event) => setResume(event.target.value)}
        />
      </div>
      <Button onClick={handleSubmit} className="btn btn-primary btn-block mt-4">
        Save
      </Button>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Missing Fields</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in all fields before submitting</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
