import React, { useState } from "react";

export const JobApplicationStatus = () => {
    const [status, setStatus] = useState();
    const [statusHistory, setStatusHistory] = useState();
  
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