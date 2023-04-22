import React, { useState, useEffect } from "react";
import axios from "axios";

export const JobApplicationStatus = () => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/profile/status?uid=${uid}`
        );
        setDocuments(response.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setDocuments([]);
        setError("An error occurred while getting the documents");
      }
    };
    fetchData();
  }, [uid]);

  return (
    <div>
      {/* <h1>Job Application Status</h1> */}
      <form>
        {/* <label>
          UID:
          <input type="text" value={uid} readOnly />
        </label> */}
      </form>
      {error && <div>{error}</div>}
      {documents.length > 0 && (
        <ul>
          {documents.map((document) => (
            <li key={document.id}>
              <div>Title: {document.title}</div>
              <div>Status: {document.status}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
