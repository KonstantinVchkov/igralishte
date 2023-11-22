import ProductDetailCard, {
  IProductCardProps,
} from "@/components/Products/ProductdetailCard";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import style from "../../components/Products/style.module.css";
import Product, { IProductProps } from "@/components/Products/Product";
interface IProductsPage {
  productsData: IProductProps[];
}
const Products: NextPage<IProductsPage> = ({ productsData }) => {
  return (
    <div className={style.ProductsPage}>
      {productsData.map((eachProduct) => (
        <Product key={eachProduct.id} {...eachProduct} />
      ))} 
    </div>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:3001/products");
  const productsData = res.data;
  return {
    props: {
      productsData,
    },
  };
};
