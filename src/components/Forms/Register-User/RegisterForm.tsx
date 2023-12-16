import { useState } from "react";
import style from "./style.module.css";
import LogoComponent from "@/components/Header/logo";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues, IRegisterForm } from "@/types/ProjectTypes";
import axios from "axios";
import { schema } from "@/utils/validationForm";

const RegisterForm = ({ onRegisterSuccess }: IRegisterForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
      })
    );
    try {
      await axios.post("https://better-stole-lion.cyclic.app/profile", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("the api has crashed", error);
    }
    reset();
    onRegisterSuccess();
  };

  return (
    <div className={style.firstSideReg}>
      <div className={style.logoRegisterComp}>
        <LogoComponent />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={style.formGroup}>
          <label htmlFor="firstName">Име</label>
          <input
            {...register("firstName")}
            placeholder="Име"
            className={errors.firstName ? style.errorInput : ""}
            required
          />
          {errors.firstName && (
            <p className={style.errorText}>{errors.firstName.message}</p>
          )}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="lastName">Презиме</label>
          <input
            {...register("lastName")}
            placeholder="Презиме"
            className={errors.lastName ? style.errorInput : ""}
            required
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
            required
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
            required
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
            required
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
          >
            Регистрирај се
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
