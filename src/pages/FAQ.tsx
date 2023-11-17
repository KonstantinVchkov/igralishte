import FaQInfo, { IFaqComp } from "@/components/Info-Components/Faq/FAQ";
import BreadCrumbs from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/BreadCrumbs";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

interface IFaqPage {
  responseData: IFaqComp;
}
const FAQ: NextPage<IFaqPage> = ({ responseData }) => {
  const router = useRouter();
  const exactRoute = router.asPath;

  return (
    <>
      <BreadCrumbs route={exactRoute} />
      <FaQInfo
        PageTitle={responseData.PageTitle}
        firstQuestion={responseData.firstQuestion}
        secondQuestion={responseData.secondQuestion}
      />
    </>
  );
};

export default FAQ;

export const getStaticProps: GetStaticProps = async () => {
  const responseData = await axios.get("http://localhost:3001/Faq");
  return {
    props: {
      responseData: responseData.data,
    },
  };
};
