import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import InfoCircle from "../InfoCircle/InfoCircle";

import { IBannerTop } from "@/types/ProjectTypes";
const BannerBlock = ({
  img,
  imgText,
  midSection = false,
  bottom = false,
  infoCircleParagraph = `Погледни ги свежите љубовни парчиња`,
  infoCircleTitle = `Valentines gal Колекција`,
  onClick,
  style: bannerStyle,
}: IBannerTop) => {
  return (
    <div className={style.TopSection}>
      <div
        className={`${style.bgImage} ${
          midSection ? `${style.midSection}` : ""
        } ${bottom ? `${style.bottomBgSection}` : ""}`}
      >
        <img src={img} alt="maintopimg" />
      </div>
      {imgText && (
        <div className={style.imgText}>
          <img src={imgText} alt="image-text" />
        </div>
      )}
      <div className={`${style.sparkle} ${midSection || bottom ? `${style.noneSParkle}` : ''}`}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1704 11.1487C15.8839 11.1487 10.5975 5.86803 10.5854 0.581575V0.562911C10.5854 0.565782 10.5852 0.569064 10.5852 0.571935C10.5852 0.568653 10.585 0.565782 10.585 0.5625V0.58096C10.5725 5.86794 5.28646 11.1486 0 11.1486C5.29276 11.1486 10.5855 16.4414 10.5855 21.7341C10.5855 16.4414 15.8783 11.1486 21.171 11.1486L21.1704 11.1487Z"
            fill="url(#paint0_linear_400_3433)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_400_3433"
              x1="-3.74325"
              y1="0.562501"
              x2="23.9178"
              y2="5.14163"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0389507" stopColor="#FFF0BF" />
              <stop offset="0.289254" stopColor="#EFC990" />
              <stop offset="0.512668" stopColor="#FDD292" />
              <stop offset="0.836534" stopColor="#F0C749" stopOpacity="0.42" />
              <stop offset="1" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div onClick={onClick} className={`${style[bannerStyle]}`}>
        <div className={style.sparkImg}>
        <img src={midSection || bottom ? `/images/icons/star-icon.png` : ''} className={style.sparkleImg} alt="" />

        </div>
        <InfoCircle
          title={infoCircleTitle}
          paragraph={infoCircleParagraph}
          arrowImg={"/images/icons/black-arrow-right.png"}
        />
      </div>
    </div>
  );
};

export default BannerBlock;
