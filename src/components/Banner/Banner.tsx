import React from "react";
import style from "./style.module.css";
import BannerTopSection from "./BannerTopSection";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <div className={style.HomePage}>
      <BannerTopSection
        img={"/images/banner-images/girl-top-banner.jpg"}
        imgText={"/images/icons/Ново.png"}
        vectorIcon="/images/icons/Vector.png"
      />
      <BannerTopSection
        img={"/images/banner-images/girl-top-banner.jpg"}
        vectorIcon="/images/icons/Vector.png"
      />
      <Carousel />
    </div>
  );
};

export default Banner;
