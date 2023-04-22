import React, { useState, useEffect } from "react";
import { TableRow } from "./TableRow";
import { Table, Pagination } from "react-bootstrap";

export const TableComponent = () => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [active, setActivePage] = useState(1);

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

  useEffect(() => {
    if (data.length > 0) {
      paginationClickHandler(1);
    }
  }, [data]);

  const paginationClickHandler = (number) => {
    const startIndex = (number - 1) * 10;
    const endIndex = startIndex + 10;
    setActivePage(number);
    setPosts(() => data.slice(startIndex, endIndex));
  };

  const pageNumbers = Math.ceil(data.length / 10);

  const items = [];
  for (let number = 1; number <= pageNumbers; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => paginationClickHandler(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="container">
      <div className="pt-3.5 text-center text-violet-700">
        <h1>Form Data Table</h1>
      </div>

      <div className="table-responsive">
        <Table bordered striped>
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
            <TableRow items={posts} />
          </tbody>
        </Table>

        {data.length > 0 && (
          <div className="mt-2 d-flex justify-content-center">
            <Pagination className="justify-content-end me-5">
              {items}
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
};
