import React from 'react'
import style from "./style.module.css"
export interface IOurWork {
  aboutWorkTitle:string;
  aboutWorkText:string;
  imgWork:string;
}
const OurWork = ({aboutWorkTitle,aboutWorkText,imgWork}:IOurWork) => {
  return (
    <div className={style.secondSection}>
    <img src={imgWork} alt="gif-card" />
    <h2>{aboutWorkTitle}</h2>
    <p>{aboutWorkText}</p>
    <p>{aboutWorkText}</p>
  </div>
  )
}

export default OurWork