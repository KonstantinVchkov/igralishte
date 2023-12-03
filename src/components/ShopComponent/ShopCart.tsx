import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Product, { IProductProps } from "../Products/Product";
import CustomerInteractionBar from "../ShoppingControlsMenu/CustomerInteractionBar";
import Boxes from "../Products/Boxes";
import OrderForm from "../Forms/OrderFormFol/OrderForm";
const ShopCart = () => {
  const [cartItems, setCartItems] = useState<IProductProps[]>([]);
  const [favorites, setFavorites] = useState<IProductProps[]>([]);
  const [modal, setIsModalVisible] = useState(false);
  const totalPrice = cartItems.reduce((accumulatedTotal, cartItem) => {
    const price = parseFloat(cartItem.price); // Convert string to number
    return accumulatedTotal + price;
  }, 0);
  const removeAllProducts = () => {
    console.log("removing button clicked");
    setCartItems([]);
  };
  const handleOrder = () => {
    setIsModalVisible(true); 
  };
  const closeModal = () => {
    setIsModalVisible(false); 
  };
  useEffect(() => {
    const productCarts = JSON.parse(localStorage.getItem("addToCart") || "[]");
    const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favoriteIds);
    setCartItems(productCarts);
  }, []);

  return (
    <>
      <div className={style.ShopCartS}>
        <CustomerInteractionBar
          cartAmount={cartItems.length}
          favAmount={favorites.length}
          imgCart={"/images/icons/shoppingcart.png"}
          favHeartImg={"/images/icons/Vector.png"}
        />

        <div className={style.FirstSection}>
          {cartItems.map((item) => (
            <Product key={item.id} {...item} />
          ))}
          {cartItems.map((item) => (
            <p key={item.id}>
              {item.name} <span>{item.price}</span>
            </p>
          ))}
        </div>
        <div className={style.SecondSection}>
          <h1>
            Вкупно: <span>{totalPrice}</span>
          </h1>
        </div>
        <div className={style.thirdSection}>
          <button onClick={handleOrder}>Продолжи</button>
          <span onClick={removeAllProducts}>
            <img src="/images/icons/trash-icon.png" alt="trash-icon" />
          </span>
        </div>
        <div className={style.fourthSection}>
          <Boxes />
        </div>
        {modal && <OrderForm popUp={modal} handleClose={closeModal} />}

       
      </div>
    </>
  );
};

export default ShopCart;
