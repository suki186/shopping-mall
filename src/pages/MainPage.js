import React from 'react'
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams(); //쿼리값 처리

  const landings = [
    {
      img: "https://cdn11.bigcommerce.com/s-fz2bnmwg7y/images/stencil/1920w/image-manager/ricky-rain-frog-headphones-back-in-school-hero.jpg?t=1723471263",
      text: "Class Of 2024",
      subText: "Start A New School Year With Your Best Friends"
    },
    {
      img: "https://cdn11.bigcommerce.com/s-fz2bnmwg7y/images/stencil/1920w/image-manager/amuseables-disco-ball-celebrating-25-hero.jpg?t=1723471343",
      text: "It's Party Time!",
      subText: "Celebrate Our 25th Year With Glam & Retro Jelly"
    }
  ];

  const landingSettings = {
    dots: false,
    infinite: true, //무한 순환
    speed: 1000,
    slidesToShow: 1, // 한번에 1개 보여줌
    slidesToScroll: 1, // 한번에 1개 넘어감
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 3000, // 자동 속도
    cssEase: "linear", // 일정 속도
  };

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

        <div className="landing-slider">
          <Slider {...landingSettings}>
            {landings.map((land, index) => (
              <div key={index} className="slide">
                <img src={land.img} />

                <div className="slide-text">
                  <h2>{land.text}</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Row>
          {productList.map((menu) => (
            <Col xs={6} md={4} lg={3}>
              <ProductCard item={menu}/>
            </Col>
            
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MainPage