import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import style from "../../components/Products/style.module.css";
import Product, { IProductProps } from "@/components/Products/Product";
import Link from "next/link";
import router from "next/router";
interface IProductsPage {
  productsData: IProductProps[];
}
const Products: NextPage<IProductsPage> = ({ productsData }) => {
  const handleFilter = (value: string) => {
    console.log("handle filter value", value);
    router.push(`/products/${value}`);
  };
  return (
    <div className={style.ProductsPage}>
      {productsData.map((eachProduct) => (
        <Product
          key={eachProduct.id}
          {...eachProduct}
          click={() => {
            handleFilter(`${eachProduct.id}`);
          }}
        />
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
