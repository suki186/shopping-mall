import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const MainPage = () => {

  const [productList, setProductList] = useState([]);

  const getProducts = async() => {
    const response = await fetch('http://localhost:5000/products');
    const data = await response.json();
    console.log(data);

    setProductList(data);
  };

  useEffect(()=> {
    getProducts()

  }, [])

  return (
    <div>
        <ProductCard />
    </div>
  )
}

export default MainPage