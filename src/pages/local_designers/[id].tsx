import React from "react";
import style from "../../components/Local-Designer-Info/LocalDesigner/style.module.css";
import LocalDesignerComponent from "@/components/Local-Designer-Info/LocalDesigner/Local_Designer";
import { GetServerSideProps } from "next";
const LocalDesignerDetail = () => {
  return (
  <div className={style.detailPage}>
    <LocalDesignerComponent id={""} brandName={""} brandImage={""} brandDescription={""} />
  </div>
  )
};

export default LocalDesignerDetail;

export const getServerSideProps:GetServerSideProps = async ({query}) => {
  // const queryItem = query.
  return{
    props:{

    }
  }
}
