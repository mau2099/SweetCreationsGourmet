import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import "../assets/styles/CoreStyle.scss";
import {
  Search,
  FavoriteBorder,
  PermIdentity,
  ShoppingBasketOutlined,
  ExpandMoreSharp,
} from "@material-ui/icons";
import logo from "../assets/static/images/Logo_SweetCreations.png";

const Header = () => (
  <header className="header_area">
    <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
      <nav className="classy-navbar" id="essenceNav">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Sweet Creations" />
        </Link>

        <div className="classy-navbar-toggler">
          <span className="navbarToggler">
            {/* <span></span>
            <span></span>
            <span></span> */}
          </span>
        </div>
        <div className="classy-menu">
          <div className="classycloseIcon">
            <div className="cross-wrap">
              {/* <span className="top"></span>
              <span className="bottom"></span> */}
            </div>
          </div>
          <div className="classynav">
            <ul>
              <li>
                <Link to="/">
                  Shop
                  <ExpandMoreSharp />
                </Link>
                <div className="megamenu">
                  <ul className="single-mega cn-col-4">
                    <li className="title">Womens Collection</li>
                    <Link to="/">Home</Link>
                    <li>
                      <a href="shop.html">Bras &amp; Panties</a>
                    </li>
                  </ul>
                  <ul className="single-mega cn-col-4">
                    <li className="title">Mens Collection</li>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                  </ul>
                  <ul className="single-mega cn-col-4">
                    <li className="title">Kids Collection</li>
                    <li>
                      <Link to="/">Link2</Link>
                    </li>
                  </ul>
                  <div className="single-mega cn-col-4">
                    {/* <img src="img/bg-img/bg-6.jpg" alt="" /> */}
                  </div>
                </div>
              </li>
              <li>
                <Link to="/">
                  Pages
                  <ExpandMoreSharp />
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/">Link2</Link>
                  </li>
                  <li>
                    <Link to="/">Link2</Link>
                  </li>
                  <li>
                    <a href="single-product-details.html">Product Details</a>
                  </li>
                  <li>
                    <Link to="/">Link2</Link>
                  </li>
                  <li>
                    <Link to="/">Link2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="header-meta d-flex clearfix justify-content-end">
        <div className="search-area">
          <form
            action="#"
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="search"
              name="search"
              id="headerSearch"
              placeholder="Type Search"
            />
            <button type="submit">
              <Search />
            </button>
          </form>
        </div>
        <div className="favourite-area">
          <Link to="/product">
            <FavoriteBorder />
          </Link>
        </div>
        <div className="user-login-info">
          <Link to="/login">
            <PermIdentity />
          </Link>
        </div>
        <div className="cart-area">
          <Link to="/cart">
            <ShoppingBasketOutlined />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
    {/* <div className="div__header--block"></div> */}
  </header>
);

export default Header;
