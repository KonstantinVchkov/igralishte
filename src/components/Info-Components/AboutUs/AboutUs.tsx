import React, { useState } from "react";
import style from "./style.module.css";
import OurStory from "./OurStory";
import OurWork from "./OurWork";
import { IAboutUs } from "@/types/ProjectTypes";

const AboutUsInfo = ({
  title,
  img,
  aboutTitle,
  aboutText,
  aboutStoryTitle: aboutStoryTitle,
  aboutStoryText: aboutStoryText,
  imgStory: imgStory,
  aboutWorkText: aboutWorkText,
  aboutWorkTitle: aboutWorkTitle,
  imgWork: imgWork,
}: IAboutUs) => {
  const [ourStory, setOurStory] = useState(false);
  const [ourWork, setOurWork] = useState(false);
  const [aboutUs, setAboutUs] = useState(true);
  const [buttonStoryText, setButtonStoryText] = useState("");
  const [ButtonWorkText, setButtonWorkText] = useState("");
  const storyClick = () => {
    setOurStory(!ourStory);
    setAboutUs(ourStory);
    setOurWork(false);
    setButtonStoryText(ourStory ? "" : "textBold");
  };

  const workClick = () => {
    setOurWork(!ourWork);
    setAboutUs(ourWork);
    setOurStory(false);
    setButtonWorkText(ourWork ? "" : "textBold");
  };
  return (
    <div className={style.AboutSection}>
      <div className={style.title}>
        <img src="/images/icons/sparks-elements-icon.png" alt="" />
        <h1>{title}</h1>
      </div>
      <div className={style.buttons}>
        <button onClick={storyClick} className={`${style[buttonStoryText]}`}>
          Нашата Приказна
        </button>
        <button onClick={workClick} className={style[ButtonWorkText]}>
          Нашата Работа
        </button>
      </div>
      {aboutUs && (
        <div className={style.secondSection}>
          <img src={img} alt="gif-card" />
          <h2>{aboutTitle}</h2>
          <p>{aboutText}</p>
          <p>{aboutText}</p>
        </div>
      )}
      {ourStory && (
        <OurStory
          aboutStoryTitle={aboutStoryTitle}
          aboutStoryText={aboutStoryText}
          imgStory={imgStory}
        />
      )}
      {ourWork && (
        <OurWork
          aboutWorkTitle={aboutWorkTitle}
          aboutWorkText={aboutWorkText}
          imgWork={imgWork}
        />
      )}
    </div>
  );
};

export default AboutUsInfo;
