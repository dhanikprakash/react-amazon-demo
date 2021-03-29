import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "../../State/StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
    return (
      <nav className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput"></input>
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link className="header_link" to="/login">
            <div className="header_option">
              <span className="header_option_line_1">Hello,</span>
              <span className="header_option_line_2">Sign-in</span>
            </div>
          </Link>
          <Link className="header_link" to="/login">
            <div className="header_option">
              <span className="header_option_line_1">Return </span>
              <span className="header_option_line_2">& Orders</span>
            </div>
          </Link>
          <Link className="header_link" to="/login">
            <div className="header_option">
              <span className="header_option_line_1">Your</span>
              <span className="header_option_line_2">Prime</span>
            </div>
          </Link>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon className="header_basket" />
            <span className="header_option_line_2">
              {basket?.length}
            </span>
          </div>
        </Link>
      </nav>
    );
}

export default Header
