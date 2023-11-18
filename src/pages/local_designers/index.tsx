import BreadCrumbs from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/BreadCrumbs";
import LocalDesignerComponent, {
  ILDesignerProps,
} from "@/components/Local-Designer-Info/LocalDesigner/Local_Designer";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import style from "../../components/Local-Designer-Info/LocalDesigner/style.module.css";
import Link from "next/link";

export interface ILDesignerPageProps {
  brandData: ILDesignerProps[];
}
const LocalDesigner: NextPage<ILDesignerPageProps> = ({ brandData }) => {
  console.log(brandData);
  const router = useRouter();
  
  const exactRoute = router.pathname;
  console.log(exactRoute);
  const handleFilter = (value: string) => {
    router.push({
      pathname: exactRoute,
      query: value,
    });
  };

  return (
    <div className={style.designers_page}>
      <BreadCrumbs route={exactRoute} />

      {brandData.map((brand, index) => (
        <Link
          key={brand.id || index}
          href={`http://localhost:3000/local_designers/${brand.id}`}
        >
          <LocalDesignerComponent
            detailClick={() => handleFilter(`${brand.id}`)}
            brandName={brand.brandName}
            brandDescription={brand.brandDescription}
            id={brand.id}
            brandImage={brand.brandImage}
          />
        </Link>
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
