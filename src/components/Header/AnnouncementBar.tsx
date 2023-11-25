import { IAnnonce } from "@/types/ProjectTypes";
import style from "./style.module.css";

const AnnouncementBar = ({ newColl, vintageColl, discount, img }: IAnnonce) => {
  return (
    <div className={style.marquee}>
      <div className={style.marqueeContent}>
        <span>{newColl}</span>
        <img src={img} alt="star-icon" />
        <span>{vintageColl}</span>
        <span>{discount}</span>
        <span>{newColl}</span>
        <img src={img} alt="star-icon" />
        <span>{vintageColl}</span>
        <span>{discount}</span>
      </div>
    </div>
  );
};
export default AnnouncementBar;
