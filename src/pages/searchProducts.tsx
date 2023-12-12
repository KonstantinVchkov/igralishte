import React, { useEffect, useState } from "react";
import style from "../components/Header/style.module.css";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { IProductProps, ISearchProducts } from "@/types/ProjectTypes";
import SearchFilter from "@/components/Header/SearchFilter";


const SearchProducts:NextPage<ISearchProducts> = ({ dataProducts }) => {

  const [filterProducts,setFilteredProducts] = useState<IProductProps[]>([])
  useEffect(() => {
    // const filter = dataProducts
    setFilteredProducts(dataProducts)
  },[dataProducts])
  return (
    <div className={style.searchProductsHamb}>
      <SearchFilter
        show={false}
        products={filterProducts}
        handleClose={() => console.log("close button clicked")}
        // handleFilter={handleFilter}
      />
    </div>
  );
};


export default SearchProducts;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log("all queries:", query.category);

  const res = `http://localhost:3001/products?category=${query.category}`;
  const dataProducts = (await axios.get(res)).data;
  return {
    props: {
      dataProducts,
    },
  };
};
