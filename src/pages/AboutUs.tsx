import AboutUsInfo, {
  IAboutUs,
} from "@/components/Info-Components/AboutUs/AboutUs";
import OurStory from "@/components/Info-Components/AboutUs/OurStory";
import OurWork from "@/components/Info-Components/AboutUs/OurWork";
import { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import axios from "axios";
interface IAboutPage {
  responseData: IAboutUs;
}
const AboutUs: NextPage<IAboutPage> = ({ responseData }) => {

  return (
    <>
      {/* {aboutUs && ( */}
        <AboutUsInfo
        title={"За нас"}
        img={responseData.img}
        aboutTitle={responseData.aboutTitle}
        aboutText={responseData.aboutText}
        aboutStoryTitle={responseData.aboutStoryTitle} aboutStoryText={responseData.aboutStoryText} imgStory={responseData.imgStory}          // handleStoryClick={storyClick}
          // handleWorkClick={workClick}
        />
      {/* // )} */}
 
    </>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps = async () => {
  const responseData = await axios.get("http://localhost:3001/AboutUs");
  return {
    props: {
      responseData: responseData.data,
    },
  };
};
