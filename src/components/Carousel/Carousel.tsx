import React from "react";
import style from "./style.module.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from '';
interface IHomeCarousel {
  img: string;
  title: string;
  price: string;
}
const HomeCarousel = ({ img, title, price }: IHomeCarousel) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={img} alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img} alt="" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img} alt="" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
