import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {

  const navigate = useNavigate();

  const showDetail =()=> {
    navigate(`/product/${item.id}`);

  };

  return (
    <div className='product-card' onClick={showDetail}>
      <div className='product-bestnew'>
        {item?.new && <div className="product-new">⭐️New </div>}
        {item?.choice && <div className="product-best">👍Best</div>}
        {item?.new == false && item?.choice == false && <div className="product-not">Noting</div>}
      </div>
      <img className='product-img' src={item?.img} />
      <div>{item?.title}</div>
      <div>€ {item?.price}</div>
        
    </div>
  );
}

export default ProductCard