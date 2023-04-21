import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { TableRow } from "./TableRow";

export const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/resumes");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <>
      <div className="container">
        <div className="pt-3.5 text-center text-violet-700">
          <h1>Form Data Table</h1>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Education</th>
                <th>Accomplishments</th>
                <th>Visa Status</th>
                <th>Website Link</th>
                <th>Resume Link</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            <TableRow key={data.id} items={data} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
