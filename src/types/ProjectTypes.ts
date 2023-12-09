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
  // handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
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
  img: string;
  adress: string;
  biography: string;
}
export interface IAnnonce {
  newColl: string;
  vintageColl: string;
  discount: string;
  img: string;
}
export interface IHomeCarousel {
  id: string;
  images: string;
  name: string;
  price: string;
}
export interface ICarouselData {
  products: IHomeCarousel[];
  // interval?:number
  handleClick: (productId: string) => void;
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
  style: any;
}
export interface IFaqComp {
  PageTitle: string;
  firstQuestion: string;
  firstAnswer: string;
  secondAnswer: string;
  secondQuestion: string;
  thirdQuestion: string;
  fourthQuestion: string;
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
export interface ILDesignerProps {
  id: string;
  brandName: string;
  brandConcept?: string;
  brandAnswer?: string;
  brandImage: string;
  brandDescription: string;
  detailClick?: () => void;
}

export type TBreadCrumbProps = {
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  brandName?: string;
};
export interface IProductCardProps {
  id: string;
  brand: string;
  name: string;
  velicina: string;
  category: string;
  color: string;
  description: string;
  sizeDescription: string;
  price: string;
  discount: string;
  condition: string;
  size: string[];
  material: string[];
  odrzuvanje: string[];
  tags: string[];
  images: string[];
  handleFavorite?: () => void;
  secondFavorite?: () => void;
  firstFavorite: boolean;
  secondBolFavorite: boolean;
  addToCart: boolean;
  btnChangeColor: boolean;
  firstAddToCart?: () => void;
  handleShopping: () => void;
}
export interface IProductProps {
  id: string;
  deliveryAdress?:number;
  images: string[];
  price: string;
  name: string;
  category: string;
  brand: string;
  accessory: string;
  size: string;
  color: string;
  click: () => void;
}
export interface ICustomerBar {
  cartAmount: number;
  favAmount: number;
  imgCart: string;
  favHeartImg: string;
}
export interface IProductsPage {
  productsData: IProductProps[];
  filteredCatFromHamMenu: IProductProps[];
  productsFiltered: IProductProps[];
  brandProductsFiltered: IProductProps[];
  accessoryProductsFiltered: IProductProps[];
  sizeProductsFiltered: IProductProps[];
  colorFilteredProducts: IProductProps[];
  priceFilteredProducts: IProductProps[];
  sortingProducts: IProductProps[];
}
export interface ILDesignerPageProps {
  brandData: ILDesignerProps[];
}
export interface IBrandDetail {
  brandDetail: ILDesignerProps;
  otherProducts: IProductProps[];
}
export interface IColors {
  colorPicked:boolean;
  color: string;
  colorPicker: (e: any) => void;
}
export interface IFilterCheckbox {
  label: string; 
  count: number; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  checked: boolean; 
}
export interface IFilterNames {
  categoryCounts: Array<{ name: string; count: number }>;
  brandCounts: Array<{ name: string; count: number }>;
  uniqueAccessories: Array<{ name: string }>;
  toggleDropItems: {
    sizes: string[];
    priceRange: Array<{ min?: number; max: number; label: string }>;
  };
  colors: Array<{ name: string }>;
  selectedCategories: string[];
  brandSelectedCategories: string[];
  accessoriesSelectedCategories: string[];
  sizesCategories: string[];
  selectedPriceRange: string;
  handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBrandCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAccessoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceRangeCheckboxChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  chooseColor: (e: React.MouseEvent<HTMLLIElement>) => void;
}
export interface IFilteredData {
  data: IProductProps[];
}
export type OpenSections = {
  Vintage: string;
  Brands: string;
  Accessories: string;
};
export interface IShopCart {
  otherProducts:IProductProps[]
}