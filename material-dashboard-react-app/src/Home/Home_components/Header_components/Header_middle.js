/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Logo from "logo.png";
import routes from "routes.js";

class Header_middle extends React.Component {
  
  render() {
    return (
        <div className="header-middle clr-white">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="logo pull-left">
                            <a><img src={Logo} /></a>
                        </div>
                        <div className="btn-group pull-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                    USA
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a>Canada</a></li>
                                    <li><a>UK</a></li>
                                </ul>
                            </div>
                            
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                    DOLLAR
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a>Canadian Dollar</a></li>
                                    <li><a>Pound</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="shop-menu pull-right">
                            <ul className="nav navbar-nav">
                                <li><a><i className="fa fa-user"></i> Account</a></li>
                                <li><a><i className="fa fa-star"></i> Wishlist</a></li>
                                <li><a><i className="fa fa-crosshairs"></i> Checkout</a></li>
                                <li><a><i className="fa fa-shopping-cart"></i> Cart</a></li>
                                <li><a><i className="fa fa-lock"></i> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Header_middle;
