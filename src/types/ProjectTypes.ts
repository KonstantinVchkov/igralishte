// import { ReactNode } from "react";

import { ReactNode } from "react";

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
export interface IAnnonce {
  newColl: string;
  vintageColl: string;
  discount: string;
  img:string
}
export interface IHomeCarousel {
  images: string;
  name: string;
  price: string;
}
export interface ICarouselData {
  products: IHomeCarousel[];
}
export interface IHomeData {
  responseData: IHomeCarousel[];
}
export interface IBannerTop {
  img: string;
  imgText?: string;
  vectorIcon: string;
  bottom?: boolean;
  midSection?: boolean;
  infoCircleTitle?: string; 
  infoCircleParagraph?: string;
  onClick: () => void;
  style:any
}
export interface IFaqComp {
  PageTitle:string;
  firstQuestion:string;
  firstAnswer?:string;
  secondAnswer?:string;
  secondQuestion:string;
  thirdQuestion?:string;
  fourthQuestion?:string;
}
export interface IFaqPage {
  responseData: IFaqComp;
}
export interface IAboutUs {
  title?: string;
  img: string;
  aboutTitle: string;
  aboutText: string;
  aboutStoryTitle: string;
  aboutStoryText: string;
  imgStory: string;
  aboutWorkTitle: string;
  aboutWorkText: string;
  imgWork: string;
}
export interface IAboutPage {
  responseData: IAboutUs;
}
export interface ILDesignerProps{
  id:string;
  brandName:string;
  brandConcept?:string;
  brandAnswer?:string;
  brandImage:string;
  brandDescription:string;
  detailClick?:() => void;
}

export type TBreadCrumbProps = {
  separator: ReactNode,
  containerClasses?: string,
  listClasses?: string,
  activeClasses?: string,
  capitalizeLinks?: boolean
  brandName?:string;
}