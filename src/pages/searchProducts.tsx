import React from 'react'
import style from '../components/Header/style.module.css'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { IProductProps } from '@/components/Products/Product'
interface ISearchProducts {
    dataProducts:IProductProps[]
}
const SearchProducts = () => {
  return (
    <div className={style.searchProductsHamb}>
        
    </div>
  )
}

export default SearchProducts

export const getServerSideProps:GetServerSideProps = async () => {
    const res = 'http://localhost:3001/products'
    const dataProducts = (await axios.get(res)).data
    return{
        props:{
            dataProducts
        }
    }
}