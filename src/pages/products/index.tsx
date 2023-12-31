import axios from "axios";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import style from "../../components/Products/style.module.css";
import Product from "@/components/Products/Product";
import { IProductProps } from "@/types/ProjectTypes";
import router from "next/router";
import FilterProducts from "@/components/FilterMenuProducts/FilterProducts";
import AnnouncementBar from "@/components/Header/AnnouncementBar";
import Pagination from "@/components/Pagination/Pagination";
import { getPaginatedProducts } from "@/utils/paginationFunction";
import { IProductsPage } from "@/types/ProjectTypes";
const Products = ({
  productsData,
  filteredCatFromHamMenu,
  productsFiltered,
  brandProductsFiltered,
  accessoryProductsFiltered,
  sizeProductsFiltered,
  colorFilteredProducts,
  priceFilteredProducts,
  sortingProducts,
}: IProductsPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const productLists = [
    sortingProducts,
    priceFilteredProducts,
    colorFilteredProducts,
    sizeProductsFiltered,
    accessoryProductsFiltered,
    brandProductsFiltered,
    productsFiltered,
    filteredCatFromHamMenu,
  ];

  const displayProducts =
    productLists.find((list) => list && list.length > 0) || productsData;
  const handleFilter = (value: string) => {
    router.push(`/products/${value}`);
  };
  const paginatedDisplayProducts = getPaginatedProducts(
    displayProducts,
    currentPage,
    itemsPerPage
  );
  const renderProduct = (product: IProductProps, index: number) => {
    const isSingle = index % 5 === 2;
    const isFourGrid = index >= 3 && (index - 3) % 7 < 4;

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
        {paginatedDisplayProducts.map(renderProduct)}
      </div>
      <div className={style.paginationProductsPage}>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={productsData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const res = await axios.get(
      "https://better-stole-lion.cyclic.app/products"
    );
    const productsData = res.data;
    const categoryUrl = `https://better-stole-lion.cyclic.app/products?category=${query.category}`;
    const sortQuery = query.condition_like;
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

    const priceGteQuery = query.price_gte;
    const priceLteQuery = query.price_lte;

    const pricePickUrl =
      priceGteQuery && priceLteQuery
        ? `https://better-stole-lion.cyclic.app/products?price_gte=${priceGteQuery}&price_lte=${priceLteQuery}`
        : null;

    const priceFilteredProducts = pricePickUrl
      ? (await axios.get(pricePickUrl)).data
      : [];

    const categoryProductsUrl = `https://better-stole-lion.cyclic.app/products?category_like=${categoryLikeQuery}`;
    const brandProductsUrl = `https://better-stole-lion.cyclic.app/products?brand_like=${brandLikeQuery}`;
    const accessoryProductsUrl = `https://better-stole-lion.cyclic.app/products?accessory_like=${accessoryCategoryQuery}`;
    const sizeProductsUrl = `https://better-stole-lion.cyclic.app/products?size_like=${sizesQuery}`;
    const colorPickUrl = `https://better-stole-lion.cyclic.app/products?color_like=${colorQuery}`;
    const sortProductsUrl = `https://better-stole-lion.cyclic.app/products?condition_like=${sortQuery}`;
    const sortingProducts = (await axios.get(sortProductsUrl)).data;
    const colorFilteredProducts = (await axios.get(colorPickUrl)).data;
    const sizeProductsFiltered = (await axios.get(sizeProductsUrl)).data;
    const brandProductsFiltered = (await axios.get(brandProductsUrl)).data;
    const accessoryProductsFiltered = (await axios.get(accessoryProductsUrl))
      .data;
    const filteredCatFromHamMenu = (await axios.get(categoryUrl)).data;

    const productsFiltered = (await axios.get(categoryProductsUrl)).data;

    return {
      props: {
        productsData,
        productsFiltered,
        brandProductsFiltered,
        sizeProductsFiltered,
        colorFilteredProducts,
        priceFilteredProducts,
        sortingProducts,
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
