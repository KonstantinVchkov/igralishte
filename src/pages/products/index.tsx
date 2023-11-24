import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import style from "../../components/Products/style.module.css";
import Product, { IProductProps } from "@/components/Products/Product";
// import Link from "next/link";
import router from "next/router";
import FilterProducts from "@/components/FilterMenuProducts/FilterProducts";
interface IProductsPage {
  productsData: IProductProps[];
  filteredCategory: IProductProps[];
}
const Products = ({ productsData, filteredCategory }: IProductsPage) => {
  // Decide which list of products to display
  const displayProducts =
    filteredCategory && filteredCategory.length > 0
      ? filteredCategory
      : productsData;

  const handleFilter = (value: string) => {
    router.push(`/products/${value}`);
  };

  const renderProduct = (product: IProductProps, index: number) => {
    // Determine the layout for the product based on its index
    const isSingle = index % 7 === 2; // For the second position
    const isFourGrid = index > 2 && (index - 3) % 7 >= 0 && (index - 3) % 7 < 4; // For the third row and every four after
    // const fourth = (index % 7 === 2);
    let productComponent = (
      <Product
        key={product.id}
        {...product}
        click={() => handleFilter(product.id)}
      />
    );

    // Apply layout classes based on index
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
      // Start a new grid container for the first product of the four
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
    <FilterProducts />
    <div className={style.ProductsPage}>
      {displayProducts.map(renderProduct)}
    </div>
    </>
  );
};

export default Products;

// const Products: NextPage<IProductsPage> = ({
//   productsData,
//   filteredCategory,
// }) => {
//   console.log(filteredCategory);
//   const handleFilter = (value: string) => {
//     router.push(`/products/${value}`);
//   };
//   return (
//     <div className={style.ProductsPage}>
//       {filteredCategory && filteredCategory.length > 0
//         ? filteredCategory.map((selectedCategory) => (
//             <Product
//               key={selectedCategory.id}
//               {...selectedCategory}
//               click={() => handleFilter(`${selectedCategory.id}`)}

//             />
//           ))
//         : productsData.map((eachProduct) => (
//             <Product
//               key={eachProduct.id}
//               {...eachProduct}
//               click={() => handleFilter(`${eachProduct.id}`)}
//             />
//           ))}
//     </div>
//   );
// };

// export default Products;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const res = await axios.get("http://localhost:3001/products");
    const productsData = res.data;
    const categoryUrl = `http://localhost:3001/products?category=${query.category}`;
    const filteredCategory = await axios.get(categoryUrl);
    return {
      props: {
        productsData,
        filteredCategory: filteredCategory.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        productsData: [],
        filteredCategory: null,
        error: "Failed to fetch data",
      },
    };
  }
};
