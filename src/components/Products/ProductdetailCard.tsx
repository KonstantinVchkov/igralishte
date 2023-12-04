import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { renderSizeSection } from "@/utils/clickHandler";
import Link from "next/link";
import Boxes from "./Boxes";

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
  handleShopping: () => void;
}
const ProductDetailCard = ({
  name,
  color,
  velicina,
  description,
  size,
  price,
  condition,
  material,
  odrzuvanje,
  tags,
  images,
  handleFavorite,
  firstFavorite,
  secondFavorite,
  secondBolFavorite,
  handleShopping,
  addToCart,
}: IProductCardProps) => {
  const quantityClick = (value: string) => {
    if (value === "minus") {
      console.log("ova e minus buttonce");
    } else {
      console.log("ova e buttonce za dodavanje");
    }
  };
  const sizeSection = renderSizeSection(size || []);
  return (
    <div className={style.ProductCard}>
      <div className={style.firstSection}>
        <h1>{name}</h1>
        {images.length > 0 && (
          <div className={style.ImagesSection}>
            <img src={images[0]} alt="" />
            <div className={style.miniCarousel}>
              {images.map((img, index) => (
                <img key={index} src={img} alt="" />
              ))}
            </div>
          </div>
        )}
        <div className={style.secondSection}>
          <h2>{price}</h2>
          <p>{description}</p>
          <p>
            Количина
            <span
              onClick={() => {
                quantityClick("minus");
              }}
            >
              -
            </span>{" "}
            <span>1</span>{" "}
            <span
              onClick={() => {
                quantityClick("plus");
              }}
            >
              +
            </span>
          </p>
          <button>Додај во Кошничка</button>
          <span onClick={handleFavorite}>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill={firstFavorite ? "black" : "white"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.97295 5.19546L3.97332 5.19513L3.97332 5.19513C4.5586 4.67419 5.24306 4.27681 5.98564 4.02681C6.72791 3.77692 7.51298 3.67943 8.29382 3.74018C9.87678 3.84028 11.3681 4.51724 12.4855 5.64294C12.4856 5.64296 12.4856 5.64298 12.4856 5.643L13.4743 6.63167L14.6844 5.4216C15.2638 4.8419 15.9552 4.38639 16.7166 4.08291C17.4779 3.77943 18.2932 3.63435 19.1125 3.65652C19.9318 3.67869 20.738 3.86765 21.4818 4.21186C22.2256 4.55607 22.8915 5.0483 23.4387 5.65849L23.439 5.65887C23.9599 6.24415 24.3573 6.9286 24.6073 7.67119C24.8572 8.41349 24.9547 9.19859 24.8939 9.97946C24.7938 11.5624 24.1168 13.0537 22.9911 14.1712L14.4644 22.6979L14.4636 22.6987C14.1999 22.958 13.8454 23.104 13.4756 23.1058C13.4754 23.1058 13.4751 23.1058 13.4749 23.1058L13.4743 22.9711C13.3079 22.9739 13.1427 22.9426 12.9888 22.8793C12.8349 22.8159 12.6956 22.7218 12.5795 22.6026L3.97295 5.19546ZM3.97295 5.19546C3.36276 5.74266 2.87053 6.4085 2.52632 7.15233C2.18211 7.89615 1.99314 8.70234 1.97097 9.52164C1.9488 10.3409 2.09389 11.1562 2.39737 11.9175C2.70085 12.6789 3.15635 13.3704 3.73605 13.9498L12.483 22.6967C12.4832 22.6969 12.4834 22.6971 12.4835 22.6972L3.97295 5.19546ZM7.89309 4.841L7.89435 4.84101C9.32022 4.8461 10.6863 5.41467 11.6947 6.42275L13.0836 7.81166C13.1342 7.86371 13.1948 7.90512 13.2617 7.93344C13.329 7.96191 13.4013 7.97658 13.4743 7.97658C13.5473 7.97658 13.6196 7.96191 13.6869 7.93344C13.7537 7.90515 13.8142 7.8638 13.8648 7.81183L15.4747 6.21251L15.4752 6.21197C15.9463 5.73867 16.5091 5.36649 17.129 5.11821C17.7489 4.86993 18.413 4.75077 19.0805 4.76804C19.7481 4.7853 20.4051 4.93862 21.0114 5.21861C21.6177 5.49861 22.1604 5.89938 22.6064 6.3964L22.6065 6.39646C24.3225 8.30652 24.1555 11.436 22.2114 13.3802L13.6747 21.9169C13.6746 21.917 13.6745 21.9171 13.6743 21.9172C13.6208 21.9695 13.5491 21.9987 13.4743 21.9987C13.3995 21.9987 13.3278 21.9695 13.2743 21.9173C13.2741 21.9171 13.274 21.917 13.2738 21.9169L4.5267 13.1592L4.52642 13.1589C4.05312 12.6878 3.68094 12.1251 3.43266 11.5051C3.18438 10.8852 3.06523 10.2211 3.08249 9.55357C3.09976 8.886 3.25308 8.22898 3.53307 7.62272C3.81302 7.01655 4.21371 6.47387 4.71063 6.0279C5.58626 5.24916 6.72136 4.82582 7.89309 4.841Z"
                fill={firstFavorite ? "black" : "white"}
                stroke="black"
                strokeWidth="0.269498"
              />
            </svg>
          </span>
        </div>
        <div className={style.thirdSection}>
          <h2>
            {velicina}{" "}
            {sizeSection.map((item, index) => (
              <span key={index}>{item.text}</span>
            ))}
          </h2>
          <p>{description}</p>
          <p>
            <Link href={""}>Види ги димензиите</Link>
          </p>
        </div>
        <div className={style.fourthSection}>
          <p>Боја : Тука ќе треба да стојат повеќе бои {color}</p>
          <p>Материјал:</p>
          <p>{material}</p>
          <p>
            Состојба{condition}{" "}
            <span>
              <Link href={"/...."}>Прочитај повеќе</Link>
            </span>
          </p>
          <h2>Насоки за одржување:</h2>
          <p>{odrzuvanje}</p>
        </div>
        <div className={style.addContainer}>
          <span onClick={secondFavorite}>
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_400_4058)">
                <rect
                  x="2"
                  y="2"
                  width="45"
                  height="45"
                  rx="6.24161"
                  fill="#FDFDFD"
                />
                <rect
                  x="2.31208"
                  y="2.31208"
                  width="44.3758"
                  height="44.3758"
                  rx="5.92953"
                  stroke="#C2C2C2"
                  strokeWidth="0.624161"
                />
              </g>
              <path
                d="M14.9729 17.1955L14.9733 17.1951L14.9733 17.1951C15.5586 16.6742 16.2431 16.2768 16.9856 16.0268C17.7279 15.7769 18.513 15.6794 19.2938 15.7402C20.8768 15.8403 22.3681 16.5172 23.4855 17.6429C23.4856 17.643 23.4856 17.643 23.4856 17.643L24.4743 18.6317L25.6844 17.4216C26.2638 16.8419 26.9552 16.3864 27.7166 16.0829C28.4779 15.7794 29.2932 15.6343 30.1125 15.6565C30.9318 15.6787 31.738 15.8677 32.4818 16.2119C33.2256 16.5561 33.8915 17.0483 34.4387 17.6585L34.439 17.6589C34.9599 18.2442 35.3573 18.9286 35.6073 19.6712C35.8572 20.4135 35.9547 21.1986 35.8939 21.9795C35.7938 23.5624 35.1168 25.0537 33.9911 26.1712L25.4644 34.6979L25.4636 34.6987C25.1999 34.958 24.8454 35.104 24.4756 35.1058C24.4754 35.1058 24.4751 35.1058 24.4749 35.1058L24.4743 34.9711C24.3079 34.9739 24.1427 34.9426 23.9888 34.8793C23.8349 34.8159 23.6956 34.7218 23.5795 34.6026L14.9729 17.1955ZM14.9729 17.1955C14.3628 17.7427 13.8705 18.4085 13.5263 19.1523C13.1821 19.8962 12.9931 20.7023 12.971 21.5216C12.9488 22.3409 13.0939 23.1562 13.3974 23.9175C13.7008 24.6789 14.1564 25.3704 14.7361 25.9498L23.483 34.6967C23.4832 34.6969 23.4834 34.6971 23.4835 34.6972L14.9729 17.1955ZM18.8931 16.841L18.8944 16.841C20.3202 16.8461 21.6863 17.4147 22.6947 18.4228L24.0836 19.8117C24.1342 19.8637 24.1948 19.9051 24.2617 19.9334C24.329 19.9619 24.4013 19.9766 24.4743 19.9766C24.5473 19.9766 24.6196 19.9619 24.6869 19.9334C24.7537 19.9051 24.8142 19.8638 24.8648 19.8118L26.4747 18.2125L26.4752 18.212C26.9463 17.7387 27.5091 17.3665 28.129 17.1182C28.7489 16.8699 29.413 16.7508 30.0805 16.768C30.7481 16.7853 31.4051 16.9386 32.0114 17.2186C32.6177 17.4986 33.1604 17.8994 33.6064 18.3964L33.6065 18.3965C35.3225 20.3065 35.1555 23.436 33.2114 25.3802L24.6747 33.9169C24.6746 33.917 24.6745 33.9171 24.6743 33.9172C24.6208 33.9695 24.5491 33.9987 24.4743 33.9987C24.3995 33.9987 24.3278 33.9695 24.2743 33.9173C24.2741 33.9171 24.274 33.917 24.2738 33.9169L15.5267 25.1592L15.5264 25.1589C15.0531 24.6878 14.6809 24.1251 14.4327 23.5051C14.1844 22.8852 14.0652 22.2211 14.0825 21.5536C14.0998 20.886 14.2531 20.229 14.5331 19.6227C14.813 19.0165 15.2137 18.4739 15.7106 18.0279C16.5863 17.2492 17.7214 16.8258 18.8931 16.841Z"
                fill={secondBolFavorite ? "black" : "white"}
                stroke="black"
                strokeWidth="0.269498"
              />
              <defs>
                <filter
                  id="filter0_d_400_4058"
                  x="0.127517"
                  y="0.127517"
                  width="48.745"
                  height="48.745"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.936242" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.7625 0 0 0 0 0.7625 0 0 0 0 0.7625 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_400_4058"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_400_4058"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </span>
          <span onClick={handleShopping}>
            <img
              src={`${
                addToCart
                  ? "/images/icons/Check-floating-icon.png"
                  : "/images/icons/shop-cart-icon.png"
              }`}
              alt=""
            />
          </span>
        </div>
        <div className={style.BoxElements}>
          <div className={style.tags}>
            {tags?.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className={style.boxes}>
            <Boxes />
          </div>
        </div>
        <div className="lastDiv">
          <h1>Други парчиња</h1>          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
