import React, { useState } from 'react'
import style from '../components/Header/style.module.css'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { IProductProps } from '@/types/ProjectTypes'
import SearchFilter from '@/components/Header/SearchFilter'


interface ISearchProducts {
    dataProducts:IProductProps[]
}
const SearchProducts = ({dataProducts}:ISearchProducts) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data based on searchQuery
  // You can use useEffect here to fetch data when searchQuery changes
  // Or call a function to fetch data directly in handleSearchSubmit

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    // Fetch data based on `query` here if not using useEffect
  };
  return (
    <div className={style.searchProductsHamb}>
        <SearchFilter show={false} products={dataProducts} handleClose={function (): void {
        throw new Error('Function not implemented.')
      } } />
    </div>
  )
}

export default SearchProducts

export const getServerSideProps:GetServerSideProps = async (query) => {
  console.log('all queries:',query)
  
    const res = 'http://localhost:3001/products'
    const dataProducts = (await axios.get(res)).data
    return{
        props:{
            dataProducts
        }
    }
}