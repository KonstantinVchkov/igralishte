import RegisterForm from "@/components/Forms/Register-User/RegisterForm";
import { NextPage } from "next";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import style from "../components/Forms/Register-User/style.module.css";
import Link from "next/link";

const Register: NextPage = () => {
  const [emailRegister, setEmailRegister] = useState(false);
  // const handleClick = () => {
  //   setEmailRegister(true);
  // };
  return (
    <>
      {emailRegister ? (
        <RegisterForm />
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
      )}
    </>
  );
};

export default Register;
