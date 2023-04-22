import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const TableRow = ({ items }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("Dictamen");
  const sendEmail = (item) => {
    // Replace with your own service ID and template ID
    const serviceId = "service_m6td8xi";
    const templateId = "template_q7m09ga";

    // Replace with your own template parameter values
    const templateParams = {
      user_email: item.email,
      user_name: item.first_name + " " + item.last_name,
      message: "Your application be reviewed.",
      // Add any other template parameters needed for the email
    };

    emailjs
      .send(serviceId, templateId, templateParams, "34k_iE5a6LQj_hmU8")
      .then((result) => {
        console.log(result.text);
        alert("Application reviewed email sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Error sending application reviewed email.");
      });
  };

  const handleStatusChange = async (id, newStatus) => {
    const json = {
      id: id,
      status: newStatus,
    };
    const response = await axios.post(
      "http://localhost:3000/resumes/update",
      json
    );
    return response.data;
  };

  return (
    <>
      {items.map((item) => (
        <tr key={item.id}>
          {console.log(item.id)}
          <td>{item.firstN}</td>
          <td>{item.lastN}</td>
          <td>{item.location}</td>
          <td>
            <a href={`mailto:${item.email}`}>{item.email}</a>
          </td>
          <td>{item.education}</td>
          <td>{item.accomplish}</td>
          <td>{item.visa}</td>
          <td>{item.website}</td>
          <td>
            <a href={item.resume} target="_blank" rel="noreferrer">
              View Resume
            </a>
          </td>
          <td>{item.status}</td>
          <td>
            <Form.Select
              value={item.status}
              onChange={(event) =>
                handleStatusChange(item.id, event.target.value, item)
              }
            >
              <option value="In Review">In Review</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </Form.Select>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => sendEmail(item)}>
              Send Email
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
