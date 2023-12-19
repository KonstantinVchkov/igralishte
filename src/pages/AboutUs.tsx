import AboutUsInfo from "@/components/Info-Components/AboutUs/AboutUs";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { IAboutPage } from "@/types/ProjectTypes";
import { ABOUTUS_API } from "@/utils/API_URLS";

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
  if (typeof ABOUTUS_API === "undefined") {
    return { props: { error: "API endpoint is undefined" } };
  }
  const responseData = await axios.get(ABOUTUS_API);
  return {
    props: {
      responseData: responseData.data,
    },
  };
};
