import React, { useState, useEffect } from "react";
import { JobApplicationStatus } from "./JobApplicationStatus";
import { UserProfileForm } from "./UserProfileForm";
import axios from "axios";

export const UserProfile = ({ setUid }) => {
  const uid = localStorage.getItem("uid");

  console.log(uid);
  console.log(setUid);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    resume: "",
    title: "",
    status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/profile?uid=${uid}`
        );
        setUser({
          first_name: response.data.first_name || "",
          last_name: response.data.last_name || "",
          email: response.data.email || "",
          phone: response.data.phone || "",
          location: response.data.location || "",
          resume: response.data.resume || "",
          title: response.data.title || "",
          status: response.data.status || "",
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [uid]);

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
              {user.location}
            </li>
            <li>
              <strong>Resume Link: </strong>
              {user.resume}
            </li>
          </ul>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Job Application Statuses</h3>
          <JobApplicationStatus />
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
