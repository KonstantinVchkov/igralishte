import React from "react";
import style from "./style.module.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from '';
interface IHomeCarousel {
  img:string;
  title:string;
  price:string;
}
const HomeCarousel = () => {
  return (
    // <div className={style.HomeCarousel}>
    <Carousel fade>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="/images/banner-images/girl-top-banner.jpg" alt="" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="/images/banner-images/girl-top-banner.jpg" alt="" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="/images/banner-images/girl-top-banner.jpg" alt="" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </div>
  );
};

export default HomeCarousel;
