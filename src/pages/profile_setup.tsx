import ProfileSetup from "@/components/Forms/Register-User/ProfileSetup";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Profile_setup: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    if (!userLoggedIn) {
      return;
    }
    setLoggedIn(true);
  }, []);
  return loggedIn && <ProfileSetup />;
};

export default Profile_setup;
