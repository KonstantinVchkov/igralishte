import React from 'react'
import style from "./style.module.css"
export interface ILDesignerProps{
  id:string;
  brandName:string;
  brandConcept?:string;
  brandAnswer?:string;
  brandImage:string;
  brandDescription:string;
  detailClick?:() => void;
}
const LocalDesignerComponent = ({id,brandName,brandImage,brandDescription,brandAnswer,brandConcept,detailClick}:ILDesignerProps) => {
  return (
    <div className={style.LocalDesigner} onClick={detailClick}>
      <div className={style.textTitle}>
        <h1>{brandName}</h1>
        <img src="/images/icons/sparks-elements-icon.png" alt="spark-icon" />
      </div>
      <div className={style.brand}>
        <img src={brandImage} alt="" />
        <p>{brandConcept}</p>
        <ul>
          <li>{brandAnswer}</li>
          <li>{brandAnswer}</li>
          <li>{brandAnswer}</li>
          <li>{brandAnswer}</li>
        </ul>
        <p>{brandDescription}</p>
      </div>
    </div>
  )
}

export default LocalDesignerComponent