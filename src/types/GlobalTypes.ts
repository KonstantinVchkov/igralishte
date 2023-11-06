import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
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