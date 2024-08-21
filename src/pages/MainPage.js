import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

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
      {/* 가운데 정렬 */}
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
            
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MainPage