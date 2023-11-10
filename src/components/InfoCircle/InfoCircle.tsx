import React from 'react'
import style from "./style.module.css"

interface IInfoCircle {
  title:string;
  paragraph:string;
  arrowImg:string;
  handleCircle?:() => void;
}

const InfoCircle = ({title,paragraph,arrowImg}:IInfoCircle) => {
  return (
    <div className={style.circleInfo}>
        <div className={style.text}>
          <h3>{title}</h3>
          <p>{paragraph}</p>
          <img src={arrowImg} alt="black-arrow-icon" />
        </div>
    </div>
  )
}

export default InfoCircle