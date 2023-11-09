import { IAnnonce } from "@/types/GlobalTypes";
import style from "./style.module.css";


const AnnouncementBar = ({newColl,vintageColl,discount,img}:IAnnonce) => {
  return (
    <div className={style.marquee}>
      <div className={style.marqueeContent}>
        <span>{newColl}</span>
       {/* <span><img src={img} alt="" /></span>  */}
        <span>{vintageColl}</span>
        <span>{discount}</span>
      </div>
    </div>
  );
};
export default AnnouncementBar;
