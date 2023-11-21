import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import style from "../../components/Products/style.module.css"
const ProductDetail:NextPage = () => {
  return (
    <div className={style.ProductPage}>

    </div>
  )
}

export default ProductDetail
export const getServerSideProps:GetServerSideProps = async ({query}) => {

  return{
    props:{

    }
  }
}