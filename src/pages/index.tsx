import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import { GetStaticProps } from "next";
import styleHome from "../styles/styleHome.module.css";
// import Banner from "@/components/Banner/Banner";
import BannerBlock from "@/components/Banner/BannerBlock";
import HomeCarousel, { IHomeCarousel } from "@/components/Carousel/Carousel";
import { useState } from "react";
// import style from "../components/Banner/style.module.css";
// import Banner from "@/components/Banner/Banner";

interface IHomeData {
  responseData: IHomeCarousel[];
}

export default function Home({ responseData }: IHomeData) {
  console.log(responseData)
  const [infoCircleStyle, setInfoCircleStyle] = useState("InfoCircle");
  const [midSectionStyle, setMidSectionStyle] = useState("midCircleI");
  const [bottomSectionStyle, setBottomSectionStyle] = useState("bottomCircleI");
// Dokolku ima nekakov problem vo idnina,da znam deka e od ovde,bidejki na klik se povikuvaat poveke pati 
  const handleInfoCircleClick = () => {
    setInfoCircleStyle(prevStyle => prevStyle === "InfoCircle" ? "orange" : "InfoCircle");
  };

  const handleMidSectionClick = () => {
    setMidSectionStyle(prevStyle => prevStyle === "midCircleI" ? "purple" : "midCircleI");
  };

  const handleBottomSectionClick = () => {
    setBottomSectionStyle(prevStyle => prevStyle === "bottomCircleI" ? "dark" : "bottomCircleI");
  };
  return (
    <div className={styleHome.HomePage}>
     <BannerBlock
        img={"/images/banner-images/girl-top-banner.jpg"}
        imgText={"/images/icons/Ново.png"}
        vectorIcon="/images/icons/Vector.png"
        onClick={handleInfoCircleClick}
        style={infoCircleStyle}
      />
        <HomeCarousel products={responseData} />
        <BannerBlock
          img={"/images/banner-images/girl-top-banner.jpg"}
          vectorIcon="/images/icons/Vector.png"
          midSection={true}
          infoCircleParagraph="Погледни ги свежите љубовни парчиња"
          infoCircleTitle="Козметика & Aксесоари"
          onClick={handleMidSectionClick}
          style={midSectionStyle}
        />
        <BannerBlock
          img={"/images/banner-images/girl-top-banner.jpg"}
          vectorIcon="/images/icons/Vector.png"
          bottom={true}
          infoCircleParagraph="Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок."
          infoCircleTitle="GIFT CARDS"
          onClick={handleBottomSectionClick}
          style={bottomSectionStyle}
        />
    </div>
  );
}

export const getStaticProps:GetStaticProps = async () => {
 const responseData = await axios.get("http://localhost:3001/products")
 
  return{
    props:{
      responseData:responseData.data
    }
  }
}
