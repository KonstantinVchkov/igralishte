import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import style from "./style.module.css";
import CustomerInteractionBar from "../ShoppingControlsMenu/CustomerInteractionBar";
import { IProductProps } from "@/types/ProjectTypes";
const FavoritesList = () => {
  const [favorites, setFavorites] = useState<IProductProps[]>([]);
  const [cartItems,setItemsInCart] = useState([])
  // console.log(cartItems.length)
  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");
  const itemsInCart = JSON.parse(localStorage.getItem('addToCart') || "[]")
    setItemsInCart(itemsInCart)
    setFavorites(favoriteIds);
  }, []);
  return (
    <div className={style.FavoritesPage}>
      <CustomerInteractionBar cartAmount={cartItems.length} favAmount={favorites.length} imgCart={"/images/icons/shoppingcart.png"} favHeartImg={"/images/icons/Vector.png"}  />
      {favorites.map((favProduct) => (
        <Product key={favProduct.id} {...favProduct} />
      ))}
    </div>
  );
};

export default FavoritesList;
