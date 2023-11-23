import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import style from "../../components/Products/style.module.css";
import Product, { IProductProps } from "@/components/Products/Product";
import Link from "next/link";
import router from "next/router";
interface IProductsPage {
  productsData: IProductProps[];
  resCategory: IProductProps[];
}
const Products: NextPage<IProductsPage> = ({ productsData, resCategory }) => {
  console.log(resCategory);
  const handleFilter = (value: string) => {
    console.log("handle filter value", value);
    router.push(`/products/${value}`);
  };
  return (
    <div className={style.ProductsPage}>
      {/* {productsData.map((eachProduct) => (
        <Product
          key={eachProduct.id}
          {...eachProduct}
          click={() => {
            handleFilter(`${eachProduct.id}`);
          }}
        />
      ))} */}
      {resCategory.map((selectedCategory) => (
        <Product
          key={selectedCategory.id}
          {...selectedCategory}
          click={() => {
            handleFilter(`${selectedCategory.id}`);
          }}
        />
      ))}
    </div>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const res = await axios.get("http://localhost:3001/products");
    const productsData = res.data;
    const categoryUrl = `http://localhost:3001/products?category=${query.category}`;
    const resCategory = await axios.get(categoryUrl);
    // console.log(resCategory.data)
    return {
      props: {
        productsData,
        resCategory: resCategory.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        productsData: [],
        resCategory: null,
        error: "Failed to fetch data",
      },
    };
  }
};
