import React from "react";
import style from "./style.module.css";
import { renderSizeSection } from "@/utils/clickHandler";
import Link from "next/link";
import Boxes from "./Boxes";

export interface IProductCardProps {
  id: string;
  brand: string;
  name: string;
  velicina:string;
  category: string;
  color: string;
  description: string;
  sizeDescription?: string;
  price: string;
  discount: string;
  condition: string;
  size: string[];
  material: string[];
  odrzuvanje: string[];
  tags: string[];
  images: string[];
}
const ProductDetailCard = ({
  brand,
  name,
  category,
  color,
  velicina,
  description,
  size,
  sizeDescription,
  price,
  discount,
  condition,
  material,
  odrzuvanje,
  tags,
  images,
}: IProductCardProps) => {
  const quantityClick = (value: string) => {
    if (value === "minus") {
      console.log("ova e minus buttonce");
    } else {
      console.log("ova e buttonce za dodavanje");
    }
  };
  const sizeSection = renderSizeSection(size || []);
  // const renderSizeSection = () => {
  //   if (size.length === 1) {
  //     return size.map((size, index) => (
  //       <span key={index}>
  //         од посакуваниот производ е останато само уште едно парче:{size}
  //       </span>
  //     ));
  //   } else if (size.length > 1) {
  //     return size.map((size, index) => (
  //       <span key={index}>{size}</span>
  //     ));
  //   } else {
  //     return <span>Немаме повеќе од посакуваниот производ</span>;
  //   }
  // };
  // if (sizeSection) {
  //   sizeSection.forEach((innerArray) => {
  //     innerArray.forEach((item) => );
  //   });
  // }
  return (
    <div className={style.ProductCard}>
      <div className={style.firstSection}>
        <h1>{name}</h1>
        {images.length > 0 && (
          <div className={style.ImagesSection}>
            {images.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
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
          <span>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.97295 5.19546L3.97332 5.19513L3.97332 5.19513C4.5586 4.67419 5.24306 4.27681 5.98564 4.02681C6.72791 3.77692 7.51298 3.67943 8.29382 3.74018C9.87678 3.84028 11.3681 4.51724 12.4855 5.64294C12.4856 5.64296 12.4856 5.64298 12.4856 5.643L13.4743 6.63167L14.6844 5.4216C15.2638 4.8419 15.9552 4.38639 16.7166 4.08291C17.4779 3.77943 18.2932 3.63435 19.1125 3.65652C19.9318 3.67869 20.738 3.86765 21.4818 4.21186C22.2256 4.55607 22.8915 5.0483 23.4387 5.65849L23.439 5.65887C23.9599 6.24415 24.3573 6.9286 24.6073 7.67119C24.8572 8.41349 24.9547 9.19859 24.8939 9.97946C24.7938 11.5624 24.1168 13.0537 22.9911 14.1712L14.4644 22.6979L14.4636 22.6987C14.1999 22.958 13.8454 23.104 13.4756 23.1058C13.4754 23.1058 13.4751 23.1058 13.4749 23.1058L13.4743 22.9711C13.3079 22.9739 13.1427 22.9426 12.9888 22.8793C12.8349 22.8159 12.6956 22.7218 12.5795 22.6026L3.97295 5.19546ZM3.97295 5.19546C3.36276 5.74266 2.87053 6.4085 2.52632 7.15233C2.18211 7.89615 1.99314 8.70234 1.97097 9.52164C1.9488 10.3409 2.09389 11.1562 2.39737 11.9175C2.70085 12.6789 3.15635 13.3704 3.73605 13.9498L12.483 22.6967C12.4832 22.6969 12.4834 22.6971 12.4835 22.6972L3.97295 5.19546ZM7.89309 4.841L7.89435 4.84101C9.32022 4.8461 10.6863 5.41467 11.6947 6.42275L13.0836 7.81166C13.1342 7.86371 13.1948 7.90512 13.2617 7.93344C13.329 7.96191 13.4013 7.97658 13.4743 7.97658C13.5473 7.97658 13.6196 7.96191 13.6869 7.93344C13.7537 7.90515 13.8142 7.8638 13.8648 7.81183L15.4747 6.21251L15.4752 6.21197C15.9463 5.73867 16.5091 5.36649 17.129 5.11821C17.7489 4.86993 18.413 4.75077 19.0805 4.76804C19.7481 4.7853 20.4051 4.93862 21.0114 5.21861C21.6177 5.49861 22.1604 5.89938 22.6064 6.3964L22.6065 6.39646C24.3225 8.30652 24.1555 11.436 22.2114 13.3802L13.6747 21.9169C13.6746 21.917 13.6745 21.9171 13.6743 21.9172C13.6208 21.9695 13.5491 21.9987 13.4743 21.9987C13.3995 21.9987 13.3278 21.9695 13.2743 21.9173C13.2741 21.9171 13.274 21.917 13.2738 21.9169L4.5267 13.1592L4.52642 13.1589C4.05312 12.6878 3.68094 12.1251 3.43266 11.5051C3.18438 10.8852 3.06523 10.2211 3.08249 9.55357C3.09976 8.886 3.25308 8.22898 3.53307 7.62272C3.81302 7.01655 4.21371 6.47387 4.71063 6.0279C5.58626 5.24916 6.72136 4.82582 7.89309 4.841Z"
                fill="white"
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
        <div className={style.BoxElements}>
          <div className={style.tags}>
            {tags?.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className={style.boxes}>
            {/* here will be another boxes component with buttons */}
            <Boxes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
