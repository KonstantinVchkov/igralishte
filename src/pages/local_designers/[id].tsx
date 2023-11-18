import React from "react";
import style from "../../components/Local-Designer-Info/LocalDesigner/style.module.css";
import LocalDesignerComponent, { ILDesignerProps } from "@/components/Local-Designer-Info/LocalDesigner/Local_Designer";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
interface IBrandDetail {
  brandDetail:ILDesignerProps
}
const LocalDesignerDetail:NextPage<IBrandDetail> = ({brandDetail}) => {
  console.log(brandDetail)
  return (
  <div className={style.detailPage}>
    
    <LocalDesignerComponent {...brandDetail} />
  </div>
  )
};

export default LocalDesignerDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryBrand = query.id as string;
  const res = await axios.get(`http://localhost:3001/brands/${queryBrand}`);
  const brandDetail = res.data;  // Extract only the data part
  return {
    props: {
      brandDetail,
    },
  };
};

