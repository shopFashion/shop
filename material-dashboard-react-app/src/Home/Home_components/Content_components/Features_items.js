/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Logo from "logo.png";
import routes from "routes.js";

class Features_items extends React.Component {
  
  render() {
    return (
        <div className="features_items">
            <h2 className="title text-center">Features Items</h2>
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                            <div className="productinfo text-center">
                                <img src="public/assets/site/images/product1.jpg" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                            </div>
                    </div>
                    <div className="choose">
                        <ul className="nav nav-pills nav-justified">
                            <li><a><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                            <li><a><i className="fa fa-plus-square"></i>Add to compare</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Features_items;
