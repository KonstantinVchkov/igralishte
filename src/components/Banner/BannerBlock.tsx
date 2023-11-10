import React from "react";
import style from "./style.module.css";
import InfoCircle from "../InfoCircle/InfoCircle";

import { IBannerTop } from "@/types/GlobalTypes";

const BannerBlock = ({
  img,
  imgText,
  vectorIcon,
  midSection = false,
  bottom = false,
  infoCircleParagraph = `Погледни ги свежите љубовни парчиња`,
  infoCircleTitle = `Valentines gal Колекција`,
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
          <img src={vectorIcon} alt="" className={style.vector} />
        </div>
      )}
      <div
        className={`${style.InfoCircle} ${
          bottom ? `${style.bottomInfoCircle}` : ""
        } ${midSection ? `${style.midSection}` : ""}`}
      >
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
