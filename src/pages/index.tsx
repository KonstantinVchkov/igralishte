import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import { GetStaticProps } from "next";
import styleHome from "../styles/styleHome.module.css"
interface IHome {
  responseData:[]
}

export default function Home({responseData}:IHome) {
  // console.log(responseData)
  return (
    <div className={styleHome.HomePage}>
      
    </div>
  )
}


export const getStaticProps:GetStaticProps = async () => {
 const responseData = await axios.get("http://localhost:3001/products")
//  console.log(responseData)
  return{
    props:{
      responseData:responseData.data
    }
  }
}