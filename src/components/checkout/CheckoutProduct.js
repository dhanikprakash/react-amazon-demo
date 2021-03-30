import React from 'react'
import { useStateValue } from "../../State/StateProvider";
import "./checkoutproduct.css";

function CheckoutProduct({id, title, image, price, rating }) {

  const  addToBasket = () => {};

    return (
      <div className="checkout_product">
        <div className="checkout_image">
          <img src={image} alt="" />
        </div>
        <div className="checkout_info">
          <p>{title}</p>
          <p className="checkout_price">
            <small>£</small>
            <strong>{price}</strong>
          </p>
          <div className="checkout_rating">
            {Array(rating)
              .fill()
              .map((x) => (
                <p>&#9733;</p>
              ))}
          </div>
          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div>
    );
}

export default CheckoutProduct
