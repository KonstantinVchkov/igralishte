import React from "react";
import style from "./style.module.css";
import InfoCircle from "../InfoCircle/InfoCircle";
interface IBannerTop {
  img: string;
  imgText?: string;
  vectorIcon: string;
}
const BannerTopSection = ({ img, imgText, vectorIcon }: IBannerTop) => {
  return (
    <div className={style.TopSection}>
      <div className={style.bgImage}>
        <img src={img} alt="maintopimg" />
      </div>
      <div className={style.imgText}>
        <img src={imgText} alt="image-text" />
        <img src={vectorIcon} alt="" className={style.vector} />
      </div>

      <div className={style.InfoCircle}>
        <InfoCircle
          title={"Valentines gal Колекција"}
          paragraph={"Погледни ги свежите љубовни парчиња"}
          arrowImg={"/images/icons/black-arrow-right.png"}
        />
      </div>
    </div>
  );
};

export default BannerTopSection;
