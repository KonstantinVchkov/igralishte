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
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(detailProduct));
  }, [detailProduct]);

  const sendToFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (!favorites.includes(detailProduct)) {
      favorites.push(detailProduct);
      setIsFavorite(true);
    } else {
      favorites = favorites.filter(
        (favId: string) => favId !== detailProduct.id
      );
      setIsFavorite(false);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <div className={style.ProductPage}>
      <NextBreadcrumb
        separator={<span> {">"} </span>}
        brandName={detailProduct.name}
      />
      <ProductDetailCard
        {...detailProduct} 
        favorite={isFavorite}
        handleFavorite={sendToFavorite}
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
