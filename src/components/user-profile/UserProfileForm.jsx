import React, { useState } from "react";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
export const UserProfileForm = ({ user }) => {
  const [resume, setResume] = useState(user.resume);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);

  const db = getFirestore();

  const handleSubmit = async (updatedUser) => {
    const uid = user.uid; // replace with user's UID
    const userRef = doc(db, "resumes", uid);
    console.log("hi");
    try {
      await updateDoc(userRef, updatedUser);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group"></div>
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
        <label htmlFor="email" className="text-lg font-bold">
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
      <button className="btn btn-primary btn-block mt-4">Save</button>
    </form>
  );
};
