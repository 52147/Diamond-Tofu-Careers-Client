import React, { useState, useEffect } from "react";
import { TableRow } from "./TableRow";
import {
  Button,
  Table,
  Spinner,
  Pagination,
  Form,
  Modal,
} from "react-bootstrap";

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
    paginationClickHandler(1); // 當進入頁面時，paginationClickHandler設定為 1
  }, []);

  let tempArr = [];
  const paginationClickHandler = (number) => {
    tempArr = [];
    for (let i = number * 10 - 10; i <= number * 10 - 1; i++) {
      if (i < data.length) {
        tempArr.push(data[i]); // temArr用來更新 post，將data推入 temArr，每次推入10筆資料
      }
    }
    setActivePage(number); // 展示完頁面後，設定pagination的數字標示為active
    setPosts(tempArr); // 更新 post 為 temArr
  };
  const pageNumbers = Math.ceil(data.length / 10); // 資料數量／１０為Pagination 圖標數量
  // let active = 1;
  let items = [];
  for (let number = 1; number <= pageNumbers; number++) {
    items.push(
      <Pagination.Item
        onClick={() => paginationClickHandler(number)} // 點擊 Pagination 圖標，推１０比資料到temArr
        key={number}
        active={number === active} // 當pagination圖標的數字 等於我們點擊的圖標，設圖標為active
      >
        {number}
      </Pagination.Item>
    );
  }

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
              <TableRow key={posts.id} items={posts} />
            </tbody>
          </table>
          <div className="mt-2 d-flex justify-content-center">
            <Pagination className="justify-content-end me-5">
              {items}
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};
