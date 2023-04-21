import React, { useState } from "react";

export const JobApplicationStatus = (props) => {
    const [status, setStatus] = useState(props.status);
    const [statusHistory, setStatusHistory] = useState([props.status]);
  
    const handleChange = (event) => {
      const newStatus = event.target.value;
      setStatus(newStatus);
      setStatusHistory([...statusHistory, newStatus]);
    };
  
    return (
      <div className="job-application-status">
        <h4>{props.title}</h4>
        <p>Current Status: {status}</p>
      </div>
    );
  };