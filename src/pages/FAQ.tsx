import FaQInfo from "@/components/Info-Components/Faq/FAQ";
import { IFaqPage } from "@/types/ProjectTypes";
import { FAQ_API } from "@/utils/API_URLS";
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
  if (typeof FAQ_API === "undefined") {
    return { props: { error: "API endpoint is undefined" } };
  }
  const responseData = await axios.get(FAQ_API);
  return {
    props: {
      responseData: responseData.data,
    },
  };
};
