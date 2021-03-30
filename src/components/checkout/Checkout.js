import React from 'react'
import { useStateValue } from "../../State/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

      const [{ basket }] = useStateValue();

    return (
      <div className="checkout">
        <img
          className="checkout_add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>
        {basket && basket?.length === 0 ? (
          <div>
            <h2>Your shopping basked is Empty</h2>
            <p>you have no items in the shopping basket.</p>
          </div>
        ) : (
          <div className="checkout__title">
            <h2>your shopping Basket</h2>
            {basket.map(item => (
                <CheckoutProduct id={item.id}
                title= {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                />


            ))}
        
          </div>
        )}
      </div>
    );
}

export default Checkout;
