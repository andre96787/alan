import React, {Component} from 'react';

import $ from "jquery";
function Nav(props){
        menuClick(){
        this.refs.ClickItem.slideToggle(500)
    }
    updateDimensions: function() {
        if ($(window).width()> 500){
                this.refs.ClickItem.removeAttr('style');
        }
    },
    
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    
    return(
    <nav>
        <a href="#" className="menu-trigger" onClick={()=>this.menuClick()}>Open menu</a>
        <div className="container">
            <div className="logo clearfix">
            <img src="img/logo.png" alt=""/>
        </div>
        <div className="nav__items">
            <ul ref="ClickItem">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </div>
        </div>
    </nav>
    );
}

export default Nav;