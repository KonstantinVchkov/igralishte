import BreadCrumbs from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/BreadCrumbs";
import LocalDesignerComponent, {
  ILDesignerProps,
} from "@/components/Local-Designer-Info/LocalDesigner/Local_Designer";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
export interface ILDesignerPageProps {
  brandData: ILDesignerProps[];
}
const LocalDesigner: NextPage<ILDesignerPageProps> = ({ brandData }) => {
  console.log(brandData);
  const router = useRouter();
  const exactRoute = router.pathname;
  const handleFilter = () => {
    router.push({
      
    })
  }
  return (
    <div>
      <BreadCrumbs route={exactRoute} />

      {brandData.map((brand, index) => (
        <LocalDesignerComponent
          key={brand.id || index}
          brandName={brand.brandName}
          brandDescription={brand.brandDescription}
          id={brand.id}
          brandImage={brand.brandImage}
        />
      ))}
    </div>
  );
};

export default LocalDesigner;

export const getServerSideProps: GetServerSideProps = async () => {
  const resData = await axios.get("http://localhost:3001/brands");
  const brandData = resData.data;
  return {
    props: {
      brandData,
    },
  };
};
