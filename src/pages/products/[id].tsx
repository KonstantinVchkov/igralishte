import { GetServerSideProps, NextPage } from "next";
import React from "react";
import style from "../../components/Products/style.module.css";
import ProductDetailCard, { IProductCardProps } from "@/components/Products/ProductdetailCard";
import axios from "axios";
import NextBreadcrumb from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/NextBreadcrumb";
export interface IProductDetailProp {
  detailProduct:IProductCardProps
}
const ProductDetail: NextPage<IProductDetailProp> = ({detailProduct}) => {
  console.log(detailProduct)
  return (
    <div className={style.ProductPage}>
      <NextBreadcrumb  separator={<span> {">"} </span>} brandName={detailProduct.name} />
      <ProductDetailCard  {...detailProduct}/>
    </div>
  );
};

export default ProductDetail;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productId = query.id as string
  const res = await axios.get(`http://localhost:3001/products/${productId}`)
  const detailProduct = res.data
  return {
    props: {
      detailProduct
    },
  };
};
