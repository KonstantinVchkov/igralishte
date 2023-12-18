import React, { useState } from "react";
import style from "./style.module.css";
import { renderSizeSection } from "@/utils/clickHandler";
import Link from "next/link";
import Boxes from "./Boxes";
import { IProductCardProps } from "@/types/ProjectTypes";

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
  firstAddToCart,
  btnChangeColor,
}: IProductCardProps) => {
  console.log("changing btn", btnChangeColor);
  const quantityClick = (value: string) => {
    if (value === "minus") {
      console.log("ova e minus buttonce");
    } else {
      console.log("ova e buttonce za dodavanje");
    }
  };
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const goToPrevImage = () => {
    // za da se naprai genericka samo se stava tuka eden tip vnatre vo zagradite i se prai genericka funkcijata i vo odnos na logikata,i isto taka dokolku se raboti za next se koristi logikata za next,dokolku e za prev se koristi logikata za prev
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const sizeSection = renderSizeSection(size || []);
  return (
    <div className={style.ProductCard}>
      <div className={style.firstSection}>
        <h1>{name}</h1>
        <div className={style.ImgContainerOne}>
          <img src={images[activeImageIndex]} alt="" />
        </div>
        {images.length > 0 && (
          <div className={style.ImagesSection}>
            <div className={style.miniCarousel}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setActiveImageIndex(index)}
                  className={index === activeImageIndex ? style.active : ""}
                />
              ))}
            </div>
            <div className={style.NextPrevBtn}>
              <button className={style.prev} onClick={goToPrevImage}>
                &lt;
              </button>
              <button className={style.next} onClick={goToNextImage}>
                &gt;
              </button>
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
          <div className="d-flex align-items-center">
            <button onClick={firstAddToCart} className={style.addCartBtn}>
              {btnChangeColor ? (
                <img
                  className={style.btnKosnicka}
                  src="/images/icons/btn-kosnicka.png"
                  alt=""
                />
              ) : (
                "Додади во Кошничка"
              )}
            </button>
            <span className="ml-2" onClick={handleFavorite}>
              <img
                src={
                  firstFavorite
                    ? "/images/heart-floating-black.svg"
                    : "/images/heart-floating-white.svg"
                }
                alt=""
              />
            </span>
          </div>
        </div>
        <div className={style.thirdSection}>
          {velicina}{" "}
          {sizeSection.map((item, index) => (
            <span key={index}>{item.text}</span>
          ))}
          <p>{description}</p>
          <p>
            <Link href={""}>Види ги димензиите</Link>
          </p>
        </div>
        <div className={style.fourthSection}>
          <p>
            Боја: <span className={style.colorProduct}>{color}</span>
          </p>
          <p>Материјал:</p>
          <p>{material}</p>
          <p>
            Состојба:{condition}
            <span>
              <Link href={"/...."}>Прочитај повеќе</Link>
            </span>
          </p>
          <h2>Насоки за одржување:</h2>
          <p>{odrzuvanje}</p>
        </div>
        <div className={style.addContainer}>
          <span onClick={secondFavorite}>
            <img
              src={
                secondBolFavorite
                  ? "/images/heart-floating-black.svg"
                  : "/images/heart-floating-white.svg"
              }
              alt=""
            />
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
