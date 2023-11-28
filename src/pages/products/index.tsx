import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import style from "../../components/Products/style.module.css";
import Product, { IProductProps } from "@/components/Products/Product";
// import Link from "next/link";
import router from "next/router";
import FilterProducts from "@/components/FilterMenuProducts/FilterProducts";
import AnnouncementBar from "@/components/Header/AnnouncementBar";
interface IProductsPage {
  productsData: IProductProps[];
  filteredCatFromHamMenu: IProductProps[];
  productsFiltered: IProductProps[];
}
const Products = ({
  productsData,
  filteredCatFromHamMenu,
  productsFiltered,
}: IProductsPage) => {
  const displayProducts =
    productsFiltered && productsFiltered.length > 0
      ? productsFiltered
      : filteredCatFromHamMenu && filteredCatFromHamMenu.length > 0
      ? filteredCatFromHamMenu
      : productsData;
  const handleFilter = (value: string) => {
    router.push(`/products/${value}`);
  };

  const renderProduct = (product: IProductProps, index: number) => {
    const isSingle = index % 7 === 2;
    const isFourGrid = index > 2 && (index - 3) % 7 >= 0 && (index - 3) % 7 < 4;
    // const fourth = (index % 7 === 2);
    let productComponent = (
      <Product
        key={product.id}
        {...product}
        click={() => handleFilter(product.id)}
      />
    );

    if (isSingle) {
      return (
        <div
          className={`${style.product} ${style.SingleProduct}`}
          key={product.id}
        >
          {productComponent}
        </div>
      );
    } else if (isFourGrid) {
      if ((index - 3) % 7 === 0) {
        return (
          <div
            className={`${style.product} ${style.FourProductsGrid}`}
            key={`four-grid-${product.id}`}
          >
            {productComponent}
          </div>
        );
      } else {
        return productComponent;
      }
    } else {
      return productComponent;
    }
  };

  return (
    <>
      <AnnouncementBar
        newColl={"Нова Колекција"}
        vintageColl={"Vintage - Kolekcija"}
        discount={"Попусти"}
        img={"/images/icons/star-icon.png"}
      />
      <FilterProducts data={productsData} />
      <div className={style.ProductsPage}>
        {displayProducts.map(renderProduct)}
      </div>
    </>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    console.log("Query parameters:", query);

    const res = await axios.get("http://localhost:3001/products");
    const productsData = res.data;
    const categoryUrl = `http://localhost:3001/products?category=${query.category}`;
    const categoryLikeQuery = Array.isArray(query.category_like) ? query.category_like.join('&category_like=') : query.category_like;

    const filteredCatFromHamMenu = (await axios.get(categoryUrl)).data;
    const categoryProducts = `http://localhost:3001/products?category_like=${categoryLikeQuery}`;
    const productsFiltered = (await axios.get(categoryProducts)).data;
    // const productsFiltered = filterProduct.data;
    // console.log("query category:",categoryUrl)
    console.log("ova e od filter menito od products", productsFiltered);
    return {
      props: {
        productsData,
        productsFiltered,
        filteredCatFromHamMenu,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        productsData: [],
        filteredCatFromHamMenu: null,
        error: "Failed to fetch data",
      },
    };
  }
};
