import React from "react";
import { UserProfile } from "../user-profile/UserProfile";

export const UserProfilePage = ({ uid }) => {
  return <UserProfile setUid={uid} />;
};
