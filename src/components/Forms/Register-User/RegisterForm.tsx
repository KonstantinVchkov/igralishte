import React, { useState } from 'react';
import style from './style.module.css';
import LogoComponent from '@/components/Header/logo';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IFormData, IFormInput } from '@/types/GlobalTypes';
import axios from 'axios';
import { useRouter } from 'next/router';

// Validation schema
const schema = yup.object({
  firstName: yup.string().required('Име е задолжително').max(20, 'Името не смее да биде подолго од 20 карактери'),
  lastName: yup.string().matches(/^[A-Za-z]+$/, 'Презимето треба да содржи само букви'),
  email: yup.string().email('Мора да биде валидна емаил адреса').required('Емаил е задолжителен'),
  password: yup.string().min(6, 'Лозинката мора да има најмалку 6 карактери').required('Лозинка е задолжителна').lowercase().uppercase(),
  repeatPassword: yup.string().oneOf([yup.ref('password'), "null"], 'Лозинките мора да се совпаѓаат').required('Потврда на лозинка е задолжителна'),
}).required();

const RegisterForm = () => {
  const router = useRouter()
  const { register, handleSubmit,reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });
  const [isRegistered,setIsRegistered] = useState(false)
  const onSubmit = async (formData: any) => {
    try {
      const response = await axios.post("http://localhost:3001/profile", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
       setIsRegistered(true)
       
    } catch (error) {
      console.error("the api has crashed", error);
    }
    reset(); 
  };
  if(isRegistered) {
    router.push("/login")
  }
  return (
    <div className={style.firstSideReg}>
      <LogoComponent />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={style.formGroup}>
          <label htmlFor="firstName">Име</label>
          <input  {...register('firstName')} placeholder="Име" className={errors.firstName ? style.errorInput : ''} />
          {errors.firstName && <p className={style.errorText}>{errors.firstName.message}</p>}
        </div>

        {/* Repeat for each form field */}
        <div className={style.formGroup}>
          <label htmlFor="lastName">Презиме</label>
          <input {...register('lastName')} placeholder="Презиме" className={errors.lastName ? style.errorInput : ''} />
          {errors.lastName && <p className={style.errorText}>{errors.lastName.message}</p>}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">Емаил Адреса</label>
          <input type="email" {...register('email')} placeholder="Емаил адреса" className={errors.email ? style.errorInput : ''} />
          {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">Лозинка</label>
          <input type="password" {...register('password')} placeholder="Лозинка" className={errors.password ? style.errorInput : ''} />
          {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="repeatPassword">Повтори Лозинка</label>
          <input type="password" {...register('repeatPassword')} placeholder="Повтори лозинка" className={errors.repeatPassword ? style.errorInput : ''} />
          {errors.repeatPassword && <p className={style.errorText}>{errors.repeatPassword.message}</p>}
        </div>

        <div className={style.formGroup}>
          <button type="submit" className={style.submitButton} disabled={isSubmitting}>
            Регистрирај се
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
