import React, { useState } from "react";
import style from "./style.module.css";
import LogoComponent from "@/components/Header/logo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData, IFormInput } from "@/types/GlobalTypes";
import axios from "axios";
import { useRouter } from "next/router";
import { schema } from "@/utils/validationForm";
interface IRegisterForm {
  onRegisterSuccess:() => void;
}
const RegisterForm = ({onRegisterSuccess}:IRegisterForm) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const onSubmit = async (formData: any) => {
    try {
      await axios.post("http://localhost:3001/profile", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsRegistered(true);
    } catch (error) {
      console.error("the api has crashed", error);
    }
    reset();
    onRegisterSuccess()
  };
  if (isRegistered) {
    console.log("Се Регистриравте,продолжете кон сетирање на профилот!")
  }
  return (
    <div className={style.firstSideReg}>
      <LogoComponent />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={style.formGroup}>
          <label htmlFor="firstName">Име</label>
          <input
            {...register("firstName")}
            placeholder="Име"
            className={errors.firstName ? style.errorInput : ""}
          />
          {errors.firstName && (
            <p className={style.errorText}>{errors.firstName.message}</p>
          )}
        </div>

        {/* Repeat for each form field */}
        <div className={style.formGroup}>
          <label htmlFor="lastName">Презиме</label>
          <input
            {...register("lastName")}
            placeholder="Презиме"
            className={errors.lastName ? style.errorInput : ""}
          />
          {errors.lastName && (
            <p className={style.errorText}>{errors.lastName.message}</p>
          )}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">Емаил Адреса</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Емаил адреса"
            className={errors.email ? style.errorInput : ""}
          />
          {errors.email && (
            <p className={style.errorText}>{errors.email.message}</p>
          )}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">Лозинка</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Лозинка"
            className={errors.password ? style.errorInput : ""}
          />
          {errors.password && (
            <p className={style.errorText}>{errors.password.message}</p>
          )}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="repeatPassword">Повтори Лозинка</label>
          <input
            type="password"
            {...register("repeatPassword")}
            placeholder="Повтори лозинка"
            className={errors.repeatPassword ? style.errorInput : ""}
          />
          {errors.repeatPassword && (
            <p className={style.errorText}>{errors.repeatPassword.message}</p>
          )}
        </div>

        <div className={style.formGroup}>
          <button
            type="submit"
            className={style.submitButton}
            disabled={isSubmitting}
            onClick={onRegisterSuccess}
          >
            Регистрирај се
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
