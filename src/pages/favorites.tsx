import { GetServerSideProps, NextPage } from "next";
import FavoritesList from "@/components/FavoritesList/FavoritesList";
import { getPaginatedProducts } from "@/utils/paginationFunction";
import { useState } from "react";
import Product, { IProductProps } from "@/components/Products/Product";
import axios from "axios";
import Pagination from "@/components/Pagination/Pagination";
import style from "../components/Products/style.module.css";

interface IFavorites {
  otherProducts: IProductProps[];
}
const Favorites: NextPage<IFavorites> = ({ otherProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginatedProducts = getPaginatedProducts(
    otherProducts,
    currentPage,
    itemsPerPage
  );
  return (
    <>
      <FavoritesList />
      <div className={style.paginatedContainer}>
        {paginatedProducts.map((product) => (
          <div className={style.paginatedProduct} key={product.id}>
            <Product {...product} />
          </div>
        ))}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={otherProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Favorites;

export const getServerSideProps: GetServerSideProps = async () => {
  const otherProductsRes = await axios.get("http://localhost:3001/products");
  const otherProducts = otherProductsRes.data;

  return {
    props: {
      otherProducts,
    },
  };
};
