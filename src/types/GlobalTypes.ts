// import { ReactNode } from "react";

export interface Props {
  children: React.ReactNode;
}

export interface IAuthentication {
  email: string;
  password: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface INavbar {
  // logo: string;
  hambMenu: string;
  searchFilter: string;
  toggleHamMenu: () => void;
}

export interface IHamMenu {
  open: boolean;
  toggleHamMenu: () => void;
  // onClose: () => void;
}

export interface ISearchMenu {
  show: boolean;
  handleClose: () => void;
}
export interface ReturnType<T> {
  data: T[];
  loading: boolean;
}

export interface FormValues {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IProfileForm {
  img:string;
  adress:string;
  biography:string;
}
