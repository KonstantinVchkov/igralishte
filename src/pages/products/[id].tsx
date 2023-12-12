import { GetServerSideProps, NextPage } from "next";
import React, {  useState } from "react";
import style from "../../components/Products/style.module.css";
import ProductDetailCard from "@/components/Products/ProductdetailCard";
import axios from "axios";
import NextBreadcrumb from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/NextBreadcrumb";
import Pagination from "@/components/Pagination/Pagination";
import Product from "@/components/Products/Product";
import { getPaginatedProducts } from "@/utils/paginationFunction";
import { IProductCardProps } from "@/types/ProjectTypes";
import { IProductProps } from "@/types/ProjectTypes";
export interface IProductDetailProp {
  detailProduct: IProductCardProps;
  otherProducts: IProductProps[];
}
const ProductDetail: NextPage<IProductDetailProp> = ({
  detailProduct,
  otherProducts,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [secondBtnFavorite, setIsSecondBtnFavorite] = useState(false);
  const [addToCartBtn, setAddToCartBtn] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const paginatedProducts = getPaginatedProducts(
    otherProducts,
    currentPage,
    itemsPerPage
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const sendToFavorite = (type: string) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const productIndex = favorites.findIndex(
      (item: any) => item.id === detailProduct.id
    );

    if (productIndex === -1) {
      favorites.push(detailProduct);
      if (type === "handleFavorite") {
        setIsFavorite(true);
      } else if (type === "secondFavorite") {
        setIsSecondBtnFavorite(true);
      }
    } else {
      favorites.splice(productIndex, 1);
      if (type === "handleFavorite") {
        setIsFavorite(false);
      } else if (type === "secondFavorite") {
        setIsSecondBtnFavorite(false);
      }
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const inShop = (type: string) => {
    if (type === "firstShopBtn") {
      let buyProduct = JSON.parse(localStorage.getItem("addToCart") || "[]");
      const productIndex = buyProduct.findIndex(
        (item: any) => item.id === detailProduct.id
      );
      if (productIndex === -1) {
        buyProduct.push(detailProduct);
        setAddToCartBtn(true);
      } else {
        buyProduct.splice(productIndex, 1);
        setAddToCartBtn(false);
      }
      localStorage.setItem("addToCart", JSON.stringify(buyProduct));
    } else if (type === "secondShopBtn") {
      let buyProduct = JSON.parse(localStorage.getItem("addToCart") || "[]");
      const productIndex = buyProduct.findIndex(
        (item: any) => item.id === detailProduct.id
      );
      if (productIndex === -1) {
        buyProduct.push(detailProduct);
        setIsAddToCart(true);
      } else {
        buyProduct.splice(productIndex, 1);
        setIsAddToCart(false);
      }
      localStorage.setItem("addToCart", JSON.stringify(buyProduct));
    }
  };
  return (
    <div className={style.ProductPage}>
      <NextBreadcrumb
        separator={<span> {">"} </span>}
        brandName={detailProduct.name}
      />
      <ProductDetailCard
        firstAddToCart={() => {
          inShop("firstShopBtn");
        }}
        {...detailProduct}
        firstFavorite={isFavorite}
        secondBolFavorite={secondBtnFavorite}
        addToCart={isAddToCart}
        btnChangeColor={addToCartBtn}
        handleShopping={() => {
          inShop("secondShopBtn");
        }}
        handleFavorite={() => {
          sendToFavorite("handleFavorite");
        }}
        secondFavorite={() => {
          sendToFavorite("secondFavorite");
        }}
      />
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
    </div>
  );
};

export default ProductDetail;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productId = query.id as string;
  const res = await axios.get(`http://localhost:3001/products/${productId}`);
  const otherProductsRes = await axios.get("http://localhost:3001/products");
  const otherProducts = otherProductsRes.data; 

  const detailProduct = res.data;
  return {
    props: {
      detailProduct,
      otherProducts,
    },
  };
};
