import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import { signInWithGooglePopup } from "../../database/firebase";

export const ApplyAs = ({ setUid }) => {
  const navigate = useNavigate();

  const handleGuestApplyClick = () => {
    // Handle guest application process
    navigate("/form");
  };

  const handleSignInClick = async () => {
    // Handle sign in process
    const role = await signInWithGooglePopup();

    if (role == 1) {
      navigate("/table");
    } else if (role == 2) {
      navigate("/form");
    }
  };

  const jobOpenings = [
    {
      title: "Software Engineer",
      company: "Acme Inc.",
      location: "San Francisco",
      date: "April 2023",
    },
    {
      title: "Data Analyst",
      company: "Widgets Co.",
      location: "New York",
      date: "May 2023",
    },
    {
      title: "Marketing Manager",
      company: "Gizmos LLC",
      location: "Los Angeles",
      date: "June 2023",
    },
  ];

  return (
    <>
      <div className="jobdes">
        <div className="border p-4">
          <h1 className="text-center text-4xl font-bold mb-8">
            Job Application
          </h1>
          <p className="text-center mb-8">Apply as Guest or Sign in.</p>
          <div className="flex justify-center items-center gap-1">
            <Button
              onClick={handleGuestApplyClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Apply as Guest
            </Button>
            <Button
              onClick={handleSignInClick}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </Button>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Job Openings</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {jobOpenings.map((job, index) => (
                  <tr key={index}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td>{job.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
