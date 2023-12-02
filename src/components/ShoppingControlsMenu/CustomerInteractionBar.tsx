import React from 'react'
import style from './style.module.css'
interface ICustomerBar{
    cartAmount:number;
    favAmount:number;
    imgCart:string;
    favHeartImg:string;
}
const CustomerInteractionBar = ({cartAmount,favAmount,imgCart,favHeartImg}:ICustomerBar) => {
  return (
    <div className={style.CustomerBar}>
        <div className={style.Amount}><img src={imgCart} alt="" />Koшничка <span>({cartAmount})</span></div>
        <div className={style.Amount}><img src={favHeartImg} alt="" />Омилени <span>({favAmount})</span></div>
    </div>
  )
}

export default CustomerInteractionBar