import React from "react";
import style from "./style.module.css";
export interface IProductProps {
  id: string;
  images: string[];
  price: string;
  name: string;
}
const Product = ({ images, price, name }: IProductProps) => {
  return (
    <div className={style.Product}>
      <img src={images[0]} alt="product-img" />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
