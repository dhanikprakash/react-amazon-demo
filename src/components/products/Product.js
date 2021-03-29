import React from 'react';
import "./Product.css";
import { useStateValue } from "../../State/StateProvider";

function Product({id, title, price, rating, image}) {
      const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id, title, image, price, rating
            }
        });

    };
    return (
      <div className="product" key={id} >
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>£</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((x) => (
                <p>&#9733;</p>
              ))}
          </div>
        </div>

        <img src={image} alt=""></img>
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    );
}

export default Product
