import React, { useState } from "react";
import style from "./style.module.css";
import OurStory from "./OurStory";
import OurWork from "./OurWork";
export interface IAboutUs {
  title?: string;
  img: string;
  aboutTitle: string;
  aboutText: string;
  aboutStoryTitle:string;
  aboutStoryText:string;
  imgStory:string;
}
const AboutUsInfo = ({
  title,
  img,
  aboutTitle,
  aboutText,
  aboutStoryTitle:aboutStoryTitle,
  aboutStoryText:aboutStoryText,
  imgStory:imgStory
}: IAboutUs) => {
  const [ourStory, setOurStory] = useState(false);
  const [ourWork, setOurWork] = useState(false);
  const [aboutUs, setAboutUs] = useState(true);
  const storyClick = () => {
    setOurStory(true);
    setAboutUs(false);
    setOurWork(false);

  };
  const workClick = () => {
    setOurWork(true);
    setAboutUs(false);
    setOurStory(false)
  };
  return (
    <div className={style.AboutSection}>
      <div className={style.title}>
        <img src="/images/icons/sparks-elements-icon.png" alt="" />
        <h1>{title}</h1>
      </div>
      <div className={style.buttons}>
        <button onClick={storyClick}>Our Story</button>
        <button onClick={workClick}>Our Work</button>
      </div>
      {aboutUs && (
        <div className={style.secondSection}>
          <img src={img} alt="gif-card" />
          <h2>{aboutTitle}</h2>
          <p>{aboutText}</p>
          <p>{aboutText}</p>
        </div>
      )}
      {ourStory && <OurStory aboutStoryTitle={aboutStoryTitle} aboutStoryText={aboutStoryText} imgStory={imgStory} />}
      {ourWork && <OurWork />}
    </div>
  );
};

export default AboutUsInfo;
