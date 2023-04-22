import React from "react";
import { Jobdes } from "../jobdes/Jobdes";
export const JobDesPage = ({ title }) => {
  return (
    <>
      <Jobdes setTitle={title} />
    </>
  );
};
