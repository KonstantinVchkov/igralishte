import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
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
  brandProductsFiltered: IProductProps[];
  accessoryProductsFiltered: IProductProps[];
  sizeProductsFiltered: IProductProps[];
  colorFilteredProducts: IProductProps[];
  priceFilteredProducts: IProductProps[];
}
const Products = ({
  productsData,
  filteredCatFromHamMenu,
  productsFiltered,
  brandProductsFiltered,
  accessoryProductsFiltered,
  sizeProductsFiltered,
  colorFilteredProducts,
  priceFilteredProducts,
}: IProductsPage) => {
  // console.log("brand products", brandProductsFiltered);
  console.log("price range products", );
  useEffect(() => {
    console.log("price range products (on mount)", priceFilteredProducts);
  }, [priceFilteredProducts]);
  const displayProducts =
  priceFilteredProducts && priceFilteredProducts.length > 0
      ? priceFilteredProducts
      : colorFilteredProducts && colorFilteredProducts.length > 0
      ? colorFilteredProducts
      : sizeProductsFiltered && sizeProductsFiltered.length > 0
      ? sizeProductsFiltered
      : accessoryProductsFiltered && accessoryProductsFiltered.length > 0
      ? accessoryProductsFiltered
      : brandProductsFiltered && brandProductsFiltered.length > 0
      ? brandProductsFiltered
      : productsFiltered && productsFiltered.length > 0
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
    console.log("Query parameters:", query.price_like);

    const res = await axios.get("http://localhost:3001/products");
    const productsData = res.data;
    const categoryUrl = `http://localhost:3001/products?category=${query.category}`;
    const categoryLikeQuery = Array.isArray(query.category_like)
      ? query.category_like.join("&category_like=")
      : query.category_like;
    const brandLikeQuery = Array.isArray(query.brand_like)
      ? query.brand_like.join("&brand_like=")
      : query.brand_like;

    const accessoryCategoryQuery = Array.isArray(query.accessory_like)
      ? query.accessory_like.join("&accessory_like=")
      : query.accessory_like;
    const sizesQuery = Array.isArray(query.size_like)
      ? query.size_like.join("&size_like=")
      : query.size_like;
    const colorQuery = Array.isArray(query.color_like)
      ? query.color_like.join("&color_like=")
      : query.color_like;
    // const priceQuery = Array.isArray(query.price_like)
    //   ? query.price_like.join("&price_lte=")
    //   : query.price_like;
    const priceGteQuery = query.price_gte;
    const priceLteQuery = query.price_lte;

    const pricePickUrl =
      priceGteQuery && priceLteQuery
        ? `http://localhost:3001/products?price_gte=${priceGteQuery}&price_lte=${priceLteQuery}`
        : null;

    const priceFilteredProducts = pricePickUrl
      ? (await axios.get(pricePickUrl)).data
      : [];

    const categoryProducts = `http://localhost:3001/products?category_like=${categoryLikeQuery}`;
    const brandProducts = `http://localhost:3001/products?brand_like=${brandLikeQuery}`;
    const accessoryProductsUrl = `http://localhost:3001/products?accessory_like=${accessoryCategoryQuery}`;
    const sizeProductsUrl = `http://localhost:3001/products?size_like=${sizesQuery}`;
    const colorPickUrl = `http://localhost:3001/products?color_like=${colorQuery}`;
    // const pricePickUrl = `http://localhost:3001/products?price_gte=${priceQuery}`;
    // const priceFilteredProducts = (await axios.get(pricePickUrl)).data;
    const colorFilteredProducts = (await axios.get(colorPickUrl)).data;
    const sizeProductsFiltered = (await axios.get(sizeProductsUrl)).data;
    const brandProductsFiltered = (await axios.get(brandProducts)).data;
    const accessoryProductsFiltered = (await axios.get(accessoryProductsUrl))
      .data;
    const filteredCatFromHamMenu = (await axios.get(categoryUrl)).data;

    const productsFiltered = (await axios.get(categoryProducts)).data;
    console.log("exact query params", priceFilteredProducts);


    return {
      props: {
        productsData,
        productsFiltered,
        brandProductsFiltered,
        sizeProductsFiltered,
        colorFilteredProducts,
        priceFilteredProducts,
        accessoryProductsFiltered,
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
