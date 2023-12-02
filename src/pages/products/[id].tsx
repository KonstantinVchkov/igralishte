import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import style from "../../components/Products/style.module.css";
import ProductDetailCard, {
  IProductCardProps,
} from "@/components/Products/ProductdetailCard";
import axios from "axios";
import NextBreadcrumb from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/NextBreadcrumb";
export interface IProductDetailProp {
  detailProduct: IProductCardProps;
}
const ProductDetail: NextPage<IProductDetailProp> = ({ detailProduct }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [secondBtnFavorite, setIsSecondBtnFavorite] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
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
  const inShop = () => {
    let buyProduct = JSON.parse(localStorage.getItem("addToCart") || "[]");
    const productIndex = buyProduct.findIndex(
      (item: any) => item.id === detailProduct.id
    );
    if (productIndex === -1) {
      buyProduct.push(detailProduct);
      setIsAddToCart(true);
    } else {
      buyProduct.splice(productIndex,1)
      setIsAddToCart(false);
    }
    localStorage.setItem("addToCart", JSON.stringify(buyProduct));
  };
  return (
    <div className={style.ProductPage}>
      <NextBreadcrumb
        separator={<span> {">"} </span>}
        brandName={detailProduct.name}
      />
      <ProductDetailCard
        {...detailProduct}
        firstFavorite={isFavorite}
        secondBolFavorite={secondBtnFavorite}
        addToCart={isAddToCart}
        handleShopping={inShop}
        handleFavorite={() => {
          sendToFavorite("handleFavorite");
        }}
        secondFavorite={() => {
          sendToFavorite("secondFavorite");
        }}
      />
    </div>
  );
};

export default ProductDetail;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productId = query.id as string;
  const res = await axios.get(`http://localhost:3001/products/${productId}`);
  const detailProduct = res.data;
  return {
    props: {
      detailProduct,
    },
  };
};
