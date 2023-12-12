import React from 'react'
import style from "./style.module.css"
import { IOurStory } from '@/types/ProjectTypes'

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