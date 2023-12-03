import ShopCart from "@/components/ShopComponent/ShopCart";
import { NextPage } from "next";
import React, { useState } from "react";
import OrderForm from "./Orders/OrderForm";
type props = {
  searchParams: Record<string, string> | null | undefined;
};
const ShoppingCart: NextPage<props> = ({searchParams}) => {
  // const [showHide,setShowHide] = useState()
  const showModal = searchParams?.modal;
  return (
    <div>
      <ShopCart />
      
      {/* <OrderForm  /> */}
    </div>
  );
};

export default ShoppingCart;
