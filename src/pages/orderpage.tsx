import ShopCart from "@/components/ShopComponent/ShopCart";
import { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import axios from "axios";
import Product from "@/components/Products/Product";
import { getPaginatedProducts } from "@/utils/paginationFunction";
import style from "../components/Products/style.module.css";
import Pagination from "@/components/Pagination/Pagination";
import { IShopCart } from "@/types/ProjectTypes";
import Link from "next/link";

const ShoppingCart: NextPage<IShopCart> = ({ otherProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginatedProducts = getPaginatedProducts(
    otherProducts,
    currentPage,
    itemsPerPage
  );
  return (
    <div className={style.orderPage}>
      <ShopCart />
      <div className={style.paginatedContainer}>
        {paginatedProducts.map((product) => (
          <div className={style.paginatedProduct} key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Product {...product} />
            </Link>
          </div>
        ))}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={otherProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
export const getServerSideProps: GetServerSideProps = async () => {
  const otherProductsRes = await axios.get("https://better-stole-lion.cyclic.app/products");
  const otherProducts = otherProductsRes.data;

  return {
    props: {
      otherProducts,
    },
  };
};
