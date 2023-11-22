import { GetServerSideProps, NextPage } from "next";
import React from "react";
import style from "../../components/Products/style.module.css";
import ProductDetailCard from "@/components/Products/ProductdetailCard";
const ProductDetail: NextPage = () => {
  return (
    <div className={style.ProductPage}>
      <ProductDetailCard />
    </div>
  );
};

export default ProductDetail;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const resDetailProduct = query.id as string
  // const productData = resDetailProduct.data
  return {
    props: {

    },
  };
};
