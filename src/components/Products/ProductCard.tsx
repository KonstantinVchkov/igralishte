import React from "react";
import style from "./style.module.css";
export interface IProductCardProps {
  brand: string;
  name: string;
  category: string;
  color: string;
  size: string;
  sizeDescription: string;
  price: string;
  discount: string;
  material: string[];
  condition: string;
  odrzuvanje: string[];
  tags: string[];
  images: string[];
}
export type ProductProps = {
  props: IProductCardProps;
};
const ProductCard = ({ props }: ProductProps) => {
  return (
    <div className={style.ProductCard}>
      <div className={style.firstSection}>
        <h1>{props.name}</h1>
        <div className={style.ImagesSection}>
          {props.images.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
