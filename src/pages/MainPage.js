import React from 'react'
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams(); //쿼리값 처리

  const getProducts = async() => {

    const searchQuery = query.get('q') || ""; //쿼리가 없다면 빈문자열
    console.log("쿼리값: ", searchQuery);

    const response = await fetch(`https://my-json-server.typicode.com/suki186/shopping-mall/products?q=${searchQuery}`);
    const data = await response.json();
    console.log(data);

    setProductList(data);
  };

  // []에 암것도 안넣으면 프로젝트 시작 후 딱 한번만 실행
  useEffect(()=> {
    getProducts()

  }, [query])

  return (
    <div>
      {/* 가운데 정렬 */}
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col xs={6} sm={4} md={3}>
              <ProductCard item={menu}/>
            </Col>
            
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MainPage