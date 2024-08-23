import React, { useEffect, useState } from 'react'
import '../css/ProductDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import rating from '../media/rating.png'
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {

  const {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async() => {
    
    const response = await fetch(`https://my-json-server.typicode.com/suki186/shopping-mall/products/${id}`);
    const data = await response.json();
    console.log(data);

    setProduct(data);
  };

  useEffect(()=> {
    getProductDetail();
  }, [])

  return (
    <Container>
        <Row>
          <Col className='product-img' xs={12} md={6}>
            <img src={product?.img} />
          </Col>

          <Col className='product-info' xs={12} md={6}>
            <div className='product-title'>{product?.title}</div>
            <div className='product-price'>€ {product?.price}</div>
            <div className='product-rating'><img src={rating}/></div>

            <div className='product-size'>
              {product?.size.map((data) => (
                <div className='size-btn'>
                  <Button variant="outline-success">{data}</Button>
                </div>
              ))}
            </div>

            <div className='bag-btn'>
              <Button variant="info">Add To Bag</Button>
            </div>
          </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail