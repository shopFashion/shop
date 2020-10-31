/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Logo from "logo.png";
import routes from "routes.js";

class Slider extends React.Component {
  
  render() {
    return (
        <div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div id="slider-carousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
						</ol>
						
						<div className="carousel-inner">
							<div className="item active">
								<div className="col-sm-6">
									<h1><span>E</span>-SHOPPER</h1>
									<h2>Free E-Commerce Template</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<button type="button" className="btn btn-default get">Get it now</button>
								</div>
								<div className="col-sm-6">
									<img src="public/assets/site/images/girl1.jpg" className="girl img-responsive" />
									<img src="public/assets/site/images/pricing.png"  className="pricing" />
								</div>
							</div>
							<div className="item">
								<div className="col-sm-6">
									<h1><span>E</span>-SHOPPER</h1>
									<h2>100% Responsive Design</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<button type="button" className="btn btn-default get">Get it now</button>
								</div>
								<div className="col-sm-6">
									<img src="public/assets/site/images/girl2.jpg" className="girl img-responsive" />
									<img src="public/assets/site/images/pricing.png"  className="pricing" />
								</div>
							</div>
							
							<div className="item">
								<div className="col-sm-6">
									<h1><span>E</span>-SHOPPER</h1>
									<h2>Free Ecommerce Template</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<button type="button" className="btn btn-default get">Get it now</button>
								</div>
								<div className="col-sm-6">
									<img src="public/assets/site/images/girl3.jpg" className="girl img-responsive" />
									<img src="public/assets/site/images/pricing.png" className="pricing" />
								</div>
							</div>
							
						</div>
						
						<a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
							<i className="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
							<i className="fa fa-angle-right"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Slider;

