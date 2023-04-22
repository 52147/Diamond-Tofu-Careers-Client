import React from "react";
import { ApplySuccess } from "../apply-success/ApplySuccess";

export const ApplySuccessPage = ({ document }) => {
  console.log(document);
  return <ApplySuccess setDocument={document} />;
};
