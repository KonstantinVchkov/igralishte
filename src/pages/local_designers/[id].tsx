import React from "react";
import style from "../../components/Local-Designer-Info/LocalDesigner/style.module.css";
import LocalDesignerComponent from "@/components/Local-Designer-Info/LocalDesigner/Local_Designer";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import NextBreadcrumb from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/NextBreadcrumb";
import { ILDesignerProps } from "@/types/ProjectTypes";
interface IBrandDetail {
  brandDetail: ILDesignerProps;
}
const LocalDesignerDetail: NextPage<IBrandDetail> = ({ brandDetail }) => {
  return (
    <div className={style.detailPage}>
      <NextBreadcrumb
        separator={<span> {">"} </span>}
        brandName={brandDetail.brandName}
      />
      <LocalDesignerComponent {...brandDetail} />
    </div>
  );
};

export default LocalDesignerDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    // console.log("ova e od detail", query);
    const { brandName } = query;
    console.log("Brand Name on detail page:", brandName);

    // console.log("query params:",query.brandName)
  const queryBrand = query.id as string;
  // console.log("query params od id:",queryBrand)
  const res = await axios.get(
    `http://localhost:3001/brands/${queryBrand}?brandName_like=${queryBrand}`
  );
  const brandDetail = res.data;
  return {
    props: {
      brandDetail,
    },
  };
};
