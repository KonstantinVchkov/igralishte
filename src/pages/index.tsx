import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import { GetStaticProps } from "next";
import styleHome from "../styles/styleHome.module.css";
// import Banner from "@/components/Banner/Banner";
import BannerBlock from "@/components/Banner/BannerBlock";
import HomeCarousel from "@/components/Carousel/Carousel";
// import style from "../components/Banner/style.module.css";
// import Banner from "@/components/Banner/Banner";
interface IHome {
  responseData: [];
}

export default function Home({ responseData }: IHome) {
  // console.log(responseData)
  return (
    <div className={styleHome.HomePage}>
           <BannerBlock
          img={"/images/banner-images/girl-top-banner.jpg"}
          imgText={"/images/icons/Ново.png"}
          vectorIcon="/images/icons/Vector.png"
        />
        <HomeCarousel />
        <BannerBlock
          img={"/images/banner-images/girl-top-banner.jpg"}
          vectorIcon="/images/icons/Vector.png"
          midSection={true}
          infoCircleParagraph="Погледни ги свежите љубовни парчиња"
          infoCircleTitle="Козметика & Aксесоари"
        />
        <BannerBlock
          img={"/images/banner-images/girl-top-banner.jpg"}
          vectorIcon="/images/icons/Vector.png"
          bottom={true}
          infoCircleParagraph="Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок."
          infoCircleTitle="GIFT CARDS"
        />
    </div>
  );
}

// export const getStaticProps:GetStaticProps = async () => {
//  const responseData = await axios.get("http://localhost:3001/products")
// //  console.log(responseData)
//   return{
//     props:{
//       responseData:responseData.data
//     }
//   }
// }
