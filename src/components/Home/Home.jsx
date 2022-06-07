import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple M1 Chip with 8-Core CPU and 8-Core GPU
            512GB Storage"
            price={899.00}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202011?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1603403462000"
          />
          <Product
            id="49538094"
            title="System76 Pangolin 15 Linux Laptop"
            price={1199.00}
            rating={4}
            image="https://images.prismic.io/system76/b7bf227d-0b75-49a7-9006-1769cdbeb7cd_thumb.png?auto=compress,format"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="System76 Meerkat"
            price={956.00}
            rating={5}
            image="https://images.prismic.io/system76/90dff6c6-2ee6-4286-88d6-bdcdb69ffdd2_meer5-hero.png?auto=compress,format&rect=0,0,500,500&w=500&h=500"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

