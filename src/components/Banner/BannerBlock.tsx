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
  iconChange
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
        <img src={iconChange ? '/images/red-sparkle.svg' : '/images/gold-sparkle.svg'} alt="" />
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
