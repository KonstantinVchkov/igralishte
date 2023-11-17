import AboutUsInfo, {
  IAboutUs,
} from "@/components/Info-Components/AboutUs/AboutUs";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { useRouter } from "next/router";
import BreadCrumbs from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/BreadCrumbs";
interface IAboutPage {
  responseData: IAboutUs;
}
const AboutUs: NextPage<IAboutPage> = ({ responseData }) => {
  const asPathRoute = useRouter();
  const exactRoute = asPathRoute.pathname;
  // console.log(asPath);
  return (
    <>
      <BreadCrumbs route={exactRoute} />
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
  const responseData = await axios.get("http://localhost:3001/AboutUs");
  return {
    props: {
      responseData: responseData.data,
    },
  };
};
