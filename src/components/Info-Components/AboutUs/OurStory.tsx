import React from 'react'
import style from "./style.module.css"
export interface IOurStory {
  aboutStoryTitle:string;
  aboutStoryText:string;
  imgStory:string;
}
const OurStory = ({aboutStoryTitle,aboutStoryText,imgStory}:IOurStory) => {
  return (
    <div className={style.secondSection}>
    <img src={imgStory} alt="gif-card" />
    <h2>{aboutStoryTitle}</h2>
    <p>{aboutStoryText}</p>
    <p>{aboutStoryText}</p>
  </div>
  )
}

export default OurStory