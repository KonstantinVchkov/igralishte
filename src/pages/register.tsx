import RegisterForm from "@/components/Forms/Register-User/RegisterForm";
import { NextPage } from "next";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import style from "../components/Forms/Register-User/style.module.css";
import Link from "next/link";
import ProfileSetup from "@/components/Forms/Register-User/ProfileSetup";

const Register: NextPage = () => {
  const [emailRegister, setEmailRegister] = useState(false);
  const [setupProfile, setSetupProfile] = useState(false);

  const handleRegister = () => {
    setSetupProfile(true);
  };
  return (
    <>
      {!setupProfile ? (
        emailRegister ? (
          <RegisterForm onRegisterSuccess={handleRegister} />
        ) : (
          <div className={style.registerPage}>
            <Button
              onClick={() => {
                setEmailRegister(true);
              }}
            >
              Регистрирај се со емаил адреса
            </Button>
            <p>или</p>
            <Button
              onClick={() => {
                setEmailRegister(true);
              }}
            >
              Најави се со Google
            </Button>
            <Button
              onClick={() => {
                setEmailRegister(true);
              }}
            >
              Најави се со Facebook
            </Button>
            <p>
              Веќе Имаш профил?
              <span>
                <Link href={"/login"}>Логирај се</Link>
              </span>
            </p>
          </div>
        )
      ) : (
        <ProfileSetup />
      )}
    </>
  );
};

export default Register;
