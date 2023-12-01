import React, { useEffect, useState } from "react";
import Product, { IProductProps } from "../Products/Product";
import style from "./style.module.css";
const FavoritesList = () => {
  const [favorites, setFavorites] = useState<IProductProps[]>([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favoriteIds);
  }, []);
  return (
    <div className={style.FavoritesPage}>
      {favorites.map((favProduct) => (
        <Product key={favProduct.id} {...favProduct} />
      ))}
    </div>
  );
};

export default FavoritesList;
