import React from "react";
import style from "./style.module.css";
import LogoComponent from "@/components/Header/logo";
import { Form } from "react-hook-form";
const ProfileSetup = () => {
  return (
    <div className={style.ProfileSetup}>
      <LogoComponent />
      <Form>
        <label htmlFor="adress">Адреса</label>
        <input type="text" placeholder="email" />
      </Form>
    </div>
  );
};

export default ProfileSetup;
