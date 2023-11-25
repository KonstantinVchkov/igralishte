import React from "react";
import style from "./style.module.css";
export interface IProductProps {
  id: string;
  images: string[];
  price: string;
  name: string;
  category:string;
  brand:string;
  accessory:string;
  size:string;
  click:() => void;
}
const Product = ({ images, price, name,click }: IProductProps) => {
  return (
    <div onClick={click} className={style.Product}>
      <img src={images[0]} alt="product-img" />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
