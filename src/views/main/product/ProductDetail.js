import UserHeader from "../common/UserHeader";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RelatedProduct from "./section/RelatedProduct";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  // Define stock here (you can fetch it later from API)
  const stock = 540;

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) value = 1;
    if (value > stock) value = stock;
    setQuantity(value);
  };
  return (
    <>
      <UserHeader />
      <section className="product-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-default card-md mb-4">
                <div class="card-body">
                  <ul class="atbd-breadcrumb nav">
                    <li class="atbd-breadcrumb__item">
                      <Link to="" data-discover="true">
                        Product
                      </Link>
                      <span class="breadcrumb__seperator">/</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="product-item__image">
                <img src="./img/placeholder.svg" alt="" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="product-item__body">
                {/* Product Title */}
                <h2 className="card-title fw-500 product-item__title">
                  $1 Sweet & Salty Pretzel Rods (60 pack Variety)
                </h2>

                {/* Ratings */}
                <div className="stars-rating d-flex align-items-center">
                  <span className="star-icon active">★</span>
                  <span className="star-icon active">★</span>
                  <span className="star-icon active">★</span>
                  <span className="star-icon active">★</span>
                  <span className="star-icon half">★</span>
                  <span className="stars-rating__point">(4.5)</span>
                  <span className="stars-rating__review">2.3K Sold</span>
                </div>

                {/* Brand + Pricing */}
                <div className="mb-3">
                  <span className="product-price">$19.99</span>
                  <span className="product-discount">10%</span>
                </div>
                <hr className="my-5" />
                {/* Description */}
                <div className="product-deatils-pera">
                  <div className="heading">
                    <h4>Description</h4>
                  </div>
                  <div className="desc">
                    <p>
                      Give profits a quick one-two punch with a $1 Sweet & Salty
                      Pretzel Rods fundraiser: Salted, crispy pretzels dipped in
                      milk chocolate and rolled in assorted decadent candy
                      chunks. Sure to satisfy all cravings. During the summer
                      season shipping surcharges may apply due to warm weather
                      Minimum Order: 1 case Delivery = 7 days Retail Price: $1
                      per Salty Pretzel Rods Pretzel Rods are individually
                      wrapped
                    </p>
                  </div>
                </div>
                <div className="product-deatils-pera">
                  <div className="heading">
                    <h4>Category</h4>
                  </div>
                  <div className="desc">
                    <p>School</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="product-quantity">
                  <div>
                    <p>Quantity</p>
                  </div>
                  <div className="quantity-wrap">
                    <input
                      type="button"
                      value="-"
                      className="qty-btn"
                      onClick={handleDecrement}
                    />
                    <input
                      type="text"
                      value={quantity}
                      className="qty-input"
                      onChange={handleInputChange}
                    />
                    <input
                      type="button"
                      value="+"
                      className="qty-btn"
                      onClick={handleIncrement}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="product-item__button">
                  <button className="btn start">Buy Now</button>
                  <button className="btn explore">Add To Cart</button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="col-12">
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="custom-tabs"
              >
                <Tab eventKey="home" title="Description">
                  FREE Shipping Give profits a quick one-two punch with a $1
                  Sweet & Salty Pretzel Rods fundraiser: Salted, crispy pretzels
                  dipped in milk chocolate and rolled in assorted decadent candy
                  chunks. Sure to satisfy all cravings. During the summer season
                  shipping surcharges may apply due to warm weather Minimum
                  Order: 1 case
                  <ul className="mt-3">
                    <li>Delivery = 7 days</li>
                    <li>Retail Price: $1 per Salty Pretzel Rods</li>
                    <li>Pretzel Rods are individually wrapped</li>
                  </ul>
                </Tab>
                <Tab eventKey="profile" title="Ingredients">
                  Tab content for Profile
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <RelatedProduct />
      <Footer />
    </>
  );
};
export default ProductDetail;
