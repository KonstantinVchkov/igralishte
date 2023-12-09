import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Product from "../Products/Product";
import CustomerInteractionBar from "../ShoppingControlsMenu/CustomerInteractionBar";
import Boxes from "../Products/Boxes";
import OrderForm from "../Forms/OrderFormFol/OrderForm";
import { IProductProps } from "@/types/ProjectTypes";
import ButtonComp from "../ButtonComponent/ButtonComp";
const ShopCart = () => {
  const [cartItems, setCartItems] = useState<IProductProps[]>([]);
  const [favorites, setFavorites] = useState<IProductProps[]>([]);
  const [modal, setIsModalVisible] = useState(false);
  const totalPrice = cartItems.reduce((accumulatedTotal, cartItem) => {
    const price = parseFloat(cartItem.price);
    return accumulatedTotal + price;
  }, 0);
  const removeAllProducts = () => {
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
        </div>
        <div className={style.InfoSection}>
          {cartItems.map((item) => (
            <div key={item.id} className={style.ItemNames}>
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          ))}
          <div className={style.deliveryPrice}>
            <p>+ Достава до адреса</p>
            <p>150ден.</p>
            {/* {cartItems.map((cartDelivery) => (
              <p key={cartDelivery.id}>+ достава до адреса{cartDelivery.deliveryAdress}</p>
            ))} */}
          </div>
          <div className={style.discountInfo}>
            <p>Save 20% on your next purchase!</p>
          </div>
        </div>
        <div className={style.SecondSection}>
          <h1>
            Вкупно: 
          </h1>
          <span>{totalPrice}</span>
        </div>
        <div className={style.thirdSection}>
          <ButtonComp text={"Продолжи"} handleClick={handleOrder} />
          {/* <button onClick={handleOrder}>Продолжи</button> */}
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
