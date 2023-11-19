import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./style.module.css";
import { ICarouselData } from "@/types/ProjectTypes";

const HomeCarousel = ({ products }: ICarouselData) => {
  const trendyProducts = products.slice(0, 6);

  return (
    <div className={style.HomeCarousel}>
      <Carousel
        fade
        indicators={false}
        nextIcon={
          <span
            aria-hidden="true"
            className={`${style.customNextIcon} carousel-control-next-icon .carousel-control-next .carousel-control-prev`}
          />
        }
        prevIcon={
          <span
            aria-hidden="true"
            className={`${style.customPrevIcon} carousel-control-prev-icon`}
          />
        }
      >
        {trendyProducts.map((product, index) => (
          <Carousel.Item key={index}>
            <img src={product.images} alt={product.name} />

            <Carousel.Caption className={style.text}>
              <h2>{product.name}</h2>
              <h2>{product.price}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
