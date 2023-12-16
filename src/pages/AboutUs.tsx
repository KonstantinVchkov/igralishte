import AboutUsInfo from "@/components/Info-Components/AboutUs/AboutUs";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { IAboutPage } from "@/types/ProjectTypes";

const AboutUs: NextPage<IAboutPage> = ({ responseData }) => {
  return (
    <>
      <AboutUsInfo
        title={"За нас"}
        img={responseData.img}
        aboutTitle={responseData.aboutTitle}
        aboutText={responseData.aboutText}
        aboutStoryTitle={responseData.aboutStoryTitle}
        aboutStoryText={responseData.aboutStoryText}
        imgStory={responseData.imgStory}
        aboutWorkTitle={responseData.aboutWorkTitle}
        aboutWorkText={responseData.aboutWorkText}
        imgWork={responseData.imgWork}
      />
    </>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps = async () => {
  const responseData = await axios.get("https://better-stole-lion.cyclic.app/AboutUs");
  return {
    props: {
      responseData: responseData.data,
    },
  };
};
