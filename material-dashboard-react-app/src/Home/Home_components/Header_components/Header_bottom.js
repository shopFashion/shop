/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Logo from "logo.png";
import routes from "routes.js";

class Header_bottom extends React.Component {
  
  render() {
    return (
        <div className="header-bottom clr-white">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="mainmenu pull-left">
                            <ul className="nav navbar-nav collapse navbar-collapse">
                                <li><a className="active">Home</a></li>
                                <li className="dropdown"><a>Shop<i className="fa fa-angle-down"></i></a>
                                    <ul role="menu" className="sub-menu">
                                        <li><a>Products</a></li>
                                        <li><a>Product Details</a></li> 
                                        <li><a>Checkout</a></li> 
                                        <li><a>Cart</a></li> 
                                        <li><a>Login</a></li> 
                                    </ul>
                                </li> 
                                <li className="dropdown"><a>Blog<i className="fa fa-angle-down"></i></a>
                                    <ul role="menu" className="sub-menu">
                                        <li><a>Blog List</a></li>
                                        <li><a>Blog Single</a></li>
                                    </ul>
                                </li> 
                                <li><a>404</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="search_box pull-right">
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Header_bottom;
