import React from 'react'
import "./checkoutProduct.css"
import { useStateValue } from './StateProvider';
function CheckoutProduct( {id, title, image, price, rating,hideButton} ) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
    <>

      <div className='checkoutProduct'>
      <img className="checkoutProduct_image" src={image} />
     
      <div className='checkoutProduct_info'>
      <p className='checkoutProduct_title'>{title}</p>
          <p className="checkoutProduct_product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
            {Array(rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (<button onClick={removeFromBasket} >Remove from basket</button>)}{' '}
          
      </div>

    </div>
    </>
  )
}

export default CheckoutProduct