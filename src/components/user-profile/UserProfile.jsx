import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
import { JobApplicationStatus } from "./JobApplicationStatus";
import { UserProfileForm } from "./UserProfileForm";
export const UserProfile = ({ setUid }) => {
  const uid = localStorage.getItem("uid");

  console.log(uid);
  console.log(setUid);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    resume: "",
    title: "",
    status: "",
  });
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "resumes"),
        where("uid", "==", setUid),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        setUser({
          first_name: data.firstN || "",
          last_name: data.lastN || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          resume: data.resume || "",
          title: data.title || "",
          status: data.status || "",
        });
      }
    };
    fetchData();
  }, [db, setUid]);

  return (
    <div className="container mt-4 mb-4">
      <div className="card mt-4 ">
        <div className="card-body">
          <h3 className="card-title">Personal Information</h3>
          <ul className="list-unstyled">
            <li>
              <strong>First Name: </strong>
              {user.first_name}
            </li>
            <li>
              <strong>Last Name: </strong>
              {user.last_name}
            </li>
            <li>
              <strong>Email: </strong>
              {user.email}
            </li>
            <li>
              <strong>Phone: </strong>
              {user.phone}
            </li>
            <li>
              <strong>Address: </strong>
              {user.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Resume</h3>
          <p>{user.resume}</p>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Job Application Statuses</h3>
          <JobApplicationStatus title={user.title} status={user.status} />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Settings</h3>
          <UserProfileForm user={user} />
        </div>
      </div>
    </div>
  );
};
