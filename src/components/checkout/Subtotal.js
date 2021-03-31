import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../State/StateProvider";

function Subtotal() {

      const [{ basket }, dispatch] = useStateValue();
    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({" "}
                {basket !== null && basket?.length > 0 ? basket.length : 0}{" "}
                items): <strong>{` ${value} `}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={
            basket !== null && basket?.length > 0
              ? basket?.reduce((amount, item) => item.price + amount, 0)
              : 0
          }
          displayType={"text"}
          thousandSeperator={true}
          prefix={"£"}
        />
        <button> Proceed to checkout</button>
      </div>
    );
}

export default Subtotal
