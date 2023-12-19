import axios from "axios";
import { GetStaticProps } from "next";
import styleHome from "../styles/styleHome.module.css";
import BannerBlock from "@/components/Banner/BannerBlock";
import HomeCarousel from "@/components/Carousel/Carousel";
import { useState } from "react";
import { IHomeData } from "@/types/ProjectTypes";
import router from "next/router";
import { PRODUCTS_API } from "@/utils/API_URLS";

export default function Home({ responseData }: IHomeData) {
  const [sectionStyles, setSectionStyles] = useState({
    infoCircle: "InfoCircle",
    midSection: "midCircleI",
    bottomSection: "bottomCircleI",
  });
  const [sparkle, setSparkle] = useState(false);
  const handleStyleClick = (section: string) => {
    if (section === "bottomCircleI") {
      setSectionStyles((prevStyles) => ({
        ...prevStyles,
        bottomSection:
          prevStyles.bottomSection === "bottomCircleI"
            ? "dark"
            : "bottomCircleI",
      }));
    } else if (section === "midSection") {
      setSectionStyles((prevStyles) => ({
        ...prevStyles,
        midSection:
          prevStyles.midSection === "midCircleI" ? "purple" : "midCircleI",
      }));
    } else {
      setSectionStyles((prevStyles) => ({
        ...prevStyles,
        infoCircle:
          prevStyles.infoCircle === "InfoCircle" ? "orange" : "InfoCircle",
      }));
      setSparkle((prevSparkle) => !prevSparkle);
    }
  };
  const itemChoosed = (productId: string) => {
    router.push(`/products/${productId}`);
  };
  return (
    <div className={styleHome.HomePage}>
      <BannerBlock
        iconChange={sparkle}
        img={"/images/banner-images/girl-top-banner.jpg"}
        imgText={"/images/icons/Ново.png"}
        vectorIcon="/images/icons/Vector.png"
        onClick={() => {
          handleStyleClick("InfoCircle");
        }}
        style={sectionStyles.infoCircle}
      />
      <HomeCarousel handleClick={itemChoosed} products={responseData} />
      <BannerBlock
        img={"/images/banner-images/girl-top-banner.jpg"}
        vectorIcon="/images/icons/Vector.png"
        midSection={true}
        infoCircleParagraph="Погледни ги свежите љубовни парчиња"
        infoCircleTitle="Козметика & Aксесоари"
        onClick={() => {
          handleStyleClick("midSection");
        }}
        style={sectionStyles.midSection}
      />
      <BannerBlock
        img={"/images/banner-images/girl-top-banner.jpg"}
        vectorIcon="/images/icons/Vector.png"
        bottom={true}
        infoCircleParagraph="Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок."
        infoCircleTitle="GIFT CARDS"
        onClick={() => {
          handleStyleClick("bottomCircleI");
        }}
        style={sectionStyles.bottomSection}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  if (typeof PRODUCTS_API === "undefined") {
    return { props: { error: "API endpoint is undefined" } };
  }
  const responseData = await axios.get(PRODUCTS_API);

  return {
    props: {
      responseData: responseData.data,
    },
  };
};
