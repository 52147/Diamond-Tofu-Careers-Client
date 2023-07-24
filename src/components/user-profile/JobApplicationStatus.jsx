import React, { useState, useEffect } from "react";
import axios from "axios";

export const JobApplicationStatus = () => {
  const [error, setError] = useState(null);
  const [pendingDocuments, setPendingDocuments] = useState([]);
  const [rejectedDocuments, setRejectedDocuments] = useState([]);
  const [acceptedDocuments, setAcceptedDocuments] = useState([]);
  const uid = localStorage.getItem("uid");
  const sortByDate = (a, b) => {
    const dateA = new Date(a.apply_time);
    const dateB = new Date(b.apply_time);
    return dateB.getTime() - dateA.getTime();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-diamond-tofu-career.cloudfunctions.net/api/profile/status?uid=${uid}`
        );

        // Filter the documents based on status
        const pending = response.data
          .filter((document) => document.status === "Pending")
          .sort(sortByDate);
        const rejected = response.data
          .filter((document) => document.status === "Rejected")
          .sort(sortByDate);
        const accepted = response.data
          .filter((document) => document.status === "Accepted")
          .sort(sortByDate);

        setPendingDocuments(pending);
        setRejectedDocuments(rejected);
        setAcceptedDocuments(accepted);

        setError(null);
      } catch (error) {
        console.error(error);
        setPendingDocuments([]);
        setRejectedDocuments([]);
        setAcceptedDocuments([]);

        setError("An error occurred while getting the documents");
      }
    };
    fetchData();
  }, [uid]);

  const renderDocuments = (documents) => (
    <ul>
      {documents.map((document) => (
        <li key={document.id}>
          <div>Title: {document.title}</div>
          <div>Status: {document.status}</div>
          <div>Apply Time: {document.apply_time}</div>
          <hr />
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h4>Pending Application</h4>
      {error ? <div>{error}</div> : renderDocuments(pendingDocuments)}

      <h4>Rejected Application</h4>
      {error ? <div>{error}</div> : renderDocuments(rejectedDocuments)}

      <h4>Accepted Application</h4>
      {error ? <div>{error}</div> : renderDocuments(acceptedDocuments)}
    </div>
  );
};
