import { GetServerSideProps, NextPage } from "next";
import FavoritesList from "@/components/FavoritesList/FavoritesList";
import { getPaginatedProducts } from "@/utils/paginationFunction";
import { useState } from "react";
import Product from "@/components/Products/Product";
import axios from "axios";
import Pagination from "@/components/Pagination/Pagination";
import style from "../components/Products/style.module.css";
import { IProductProps } from "@/types/ProjectTypes";
import Link from "next/link";

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
    <div className={style.FavoritesPage}>
      <FavoritesList />
      <div className={style.paginatedContainer}>
        {paginatedProducts.map((product) => (
          <div className={style.paginatedProduct} key={product.id}>
            <Link href={`http://localhost:3000/products/${product.id}`}>
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

export default Favorites;

export const getServerSideProps: GetServerSideProps = async () => {
  const otherProductsRes = await axios.get("https://better-stole-lion.cyclic.app/products");
  const otherProducts = otherProductsRes.data;

  return {
    props: {
      otherProducts,
    },
  };
};
