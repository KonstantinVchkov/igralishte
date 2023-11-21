import ProductCard, { IProductCardProps } from '@/components/Products/ProductCard'
import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
interface IProductsPage {
  productsData:IProductCardProps[]
}
const Products:NextPage<IProductsPage> = ({productsData}) => {
  return (
    <div>{productsData.map((product) => (
      <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} images={product.images} size={product.size} tags={product.tags} />
    ))}</div>
  )
}

export default Products

export const getServerSideProps:GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:3001/products")
  const productsData = res.data
  return{
    props:{
      productsData
    }
  }
}