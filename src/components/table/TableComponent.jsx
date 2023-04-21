// import React, { useState, useEffect } from "react";
// import {
//   getFirestore,
//   collection,
//   query,
//   where,
//   onSnapshot,
// } from "firebase/firestore";
// import { Button, Table, Form, Container, Row, Col } from "react-bootstrap";
// import { TableRow } from "./TableRow";
// // import { FaEnvelope } from 'react-icons/fa';
// import { doc, setDoc, updateDoc } from "firebase/firestore";

// export const TableComponent = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [type, setType] = useState("Dictamen");

//   useEffect(() => {
//     const db = getFirestore();
//     const dbCollection = collection(db, "resumes");
//     let q = query(dbCollection);

//     if (searchQuery) {
//       q = query(
//         dbCollection,
//         where("last_name", "==", searchQuery.toLowerCase().trim())
//       );
//     }

//     const handleData = (snapshot) => {
//       const items = [];
//       snapshot.forEach((doc) => {
//         const docData = doc.data();
//         console.log(docData); // Check if the expected data is being fetched
//         items.push({ ...docData, id: doc.id, status: "Pending" });
//       });
//       console.log(items); // Check if the expected data is being stored in the array
//       setData(items);
//       setFilteredData(items);
//     };
//     // const handleStatus = () =>{}
//     // function handleStatus(id, status) {
//     //   // your code here
//     // }

//     const handleError = (error) => {
//       console.error(error);
//     };

//     const unsubscribe = onSnapshot(q, handleData, handleError);

//     return () => {
//       // Cleanup function to unsubscribe from Firestore queries
//       unsubscribe();
//     };
//   }, [searchQuery]);

//   const handleSearch = (event) => {
//     const query = event.target.value.trim().toLowerCase();
//     setSearchQuery(query);
//     const filtered = data.filter((item) =>
//       item.last_name.toLowerCase().includes(query)
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="pt-3.5 text-center text-violet-700">
//           <h1>Form Data Table</h1>
//         </div>

//         <div className="search-box mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by Last Name"
//             onChange={handleSearch}
//           />
//         </div>

//         <div className="table-responsive">
//           <table className="table table-bordered table-striped">
//             <thead>
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Location</th>
//                 <th>Email</th>
//                 <th>Education</th>
//                 <th>Accomplishments</th>
//                 <th>Visa Status</th>
//                 <th>Website Link</th>
//                 <th>Resume Link</th>
//                 <th>Status</th>

//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((item) => (
//                 <TableRow key={item.id} item={item} />
//               ))}
//               {/* {data.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.first_name}</td>
//                   <td>{item.last_name}</td>
//                   <td>{item.location}</td>
//                   <td>
//                     <a href={`mailto:${item.email}`}>{item.email}</a>
//                   </td>
//                   <td>{item.education}</td>
//                   <td>{item.accomplish}</td>
//                   <td>{item.visa}</td>
//                   <td>{item.resume}</td>
//                   <td>
//                   <Form.Select size="sm"
//                       className="mx-2"
//                       // value={item.status}
//                       // onChange={(e) =>{
//                       //   // console.log(e);
//                       //   // console.log(e.target);
//                       //   // console.log(e.target.value);
//                       //   // console.log(item.id);
//                       //   // handleStatus(item.id, e.target.value)

//                       // }

//                       //   // handleStatus(item.id, e.target.value)
//                       // }
//                       as="select"
//                       value={type}
//                       onChange={e => {
//                         console.log("e.target.value", e.target.value);
//                         setType(e.target.value);
//                       }}
//                     >
//                       <option value="Pending" >Pending</option>
//                       <option value="Reject" >Reject</option>
//                       <option value="Offer" >Offer</option>
//                     </Form.Select>
//                   </td>

//                   <td>
//                     <Button
//                       color="primary"
//                       size="sm"
//                       onClick={() => sendEmail(item.email)}
//                     >
//                       Email
//                     </Button>
//                   </td>
//                 </tr>
//               ))} */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };
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
