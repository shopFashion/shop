/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Logo from "logo.png";
import routes from "routes.js";



import Header_top from "../Home_components/Header_components/Header_top";
import Header_middle from "../Home_components/Header_components/Header_middle";
import Header_bottom from "../Home_components/Header_components/Header_bottom";
import Slider from "../Home_components/Slider_components/Slider";
import Left_slidebar from "../Home_components/Slider_components/Left_slidebar";
import Features_items from "../Home_components/Content_components/Features_items";
import Products from "../Home_components/Content_components/Product";
import Product_bar from "../Home_components/Content_components/Product_bar";
import Recommended_items from "../Home_components/Content_components/Recommended_items";
import Footer from "../Home_components/Footer_components/Footer";

class Home extends React.Component {
  
  render() {
    return (
        <div>
            <header id="header">
               <Header_top />
			   <Header_middle />
			   <Header_bottom /> 
	    	</header>
			<section id="slider" className="clr-white">
				<Slider />
			</section>
			<section className="clr-white">
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<Left_slidebar />
						</div>
						<div className="col-sm-9 padding-right">
							<Features_items />
							<div className="category-tab">
								<Product_bar />
								<Products />
							</div>
							<Recommended_items />				
						</div>		
					</div>
				</div>
			</section>
			<Footer />	
        </div>
    );
  }
}

export default Home;
