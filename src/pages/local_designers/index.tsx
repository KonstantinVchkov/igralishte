import LocalDesignerComponent from "@/components/Local-Designer-Info/LocalDesigner/Local_Designer";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import router from "next/router";
import style from "../../components/Local-Designer-Info/LocalDesigner/style.module.css";
import Link from "next/link";
import { ILDesignerProps } from "@/types/ProjectTypes";

export interface ILDesignerPageProps {
  brandData: ILDesignerProps[];
}
const LocalDesigner: NextPage<ILDesignerPageProps> = ({ brandData }) => {
  const handleFilter = (value: string) => {
    // console.log(`Attempting to navigate to: ${value}`);
    router.push(`/local_designers/${value}`);
  };

  return (
    <div className={style.designers_page}>
      {brandData.map((brand) => (
        <Link
          key={brand.id}
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