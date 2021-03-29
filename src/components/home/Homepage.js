import React from 'react';
import Product from "../products/Product";
import "./Home.css";

function Homepage() {
    return (
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB410675382_.jpg"
          alt="Amazon"
        ></img>
        <div className="home_row">
          <Product
            key="7"
            id="1"
            title="
New Apple iPhone 12 Pro (512GB) - Pacific Blue"
            price={895.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_SL1500_.jpg"
          ></Product>

          <Product
            key="6"
            id="8"
            title="IMREX X300C Mini Drone with Camera WIFI HD FPV Foldable RC "
            price={50.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71dgm12sX4L._AC_SL1500_.jpg"
          ></Product>
        </div>

        <div className="home_row">
          <Product
            key="2"
            id="2"
            title="Apple Macbook AIR MQD42 Intel Core i5 1800 MHz"
            price={52.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81qzMiyU28L._AC_SL1500_.jpg"
          ></Product>
          <Product
            key="3"
            id="3"
            title="Apple Macbook AIR MQD42 Intel Core i5 1800 MHz 256GB SSD 8GB RAM"
            price={935.52}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51K8mRLCTdL._AC_SL1200_.jpg"
          ></Product>
          <Product
            key="4"
            id="4"
            title="IMREX X300C Mini Drone with Camera WIFI HD FPV Foldable RC "
            price={954.24}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._AC_SL1500_.jpg"
          ></Product>
        </div>
        <div className="home_row">
          <Product
            key="5"
            id="5"
            title="
KabelDirekt – 2m – 4K HDMI cable"
            price={5.24}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81Tt3%2BNBcSL._AC_SL1500_.jpg"
          ></Product>
        </div>
      </div>
    );
}

export default Homepage;
