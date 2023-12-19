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
import { PRODUCTS_API } from "@/utils/API_URLS";

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

export default Favorites;

export const getServerSideProps: GetServerSideProps = async () => {
  if (typeof PRODUCTS_API === "undefined") {
    return { props: { error: "API endpoint is undefined" } };
  }
  const otherProductsRes = await axios.get(PRODUCTS_API);
  const otherProducts = otherProductsRes.data;

  return {
    props: {
      otherProducts,
    },
  };
};
