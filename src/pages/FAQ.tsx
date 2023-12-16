import FaQInfo from "@/components/Info-Components/Faq/FAQ";
import { IFaqPage } from "@/types/ProjectTypes";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import React from "react";

const FAQ: NextPage<IFaqPage> = ({ responseData }) => {
  return (
    <>
      <FaQInfo
      {...responseData}
      />
    </>
  );
};

export default FAQ;

export const getStaticProps: GetStaticProps = async () => {
  const responseData = await axios.get("https://better-stole-lion.cyclic.app/Faq");
  return {
    props: {
      responseData: responseData.data,
    },
  };
};
