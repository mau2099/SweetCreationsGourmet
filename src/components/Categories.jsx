import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children, title }) => {
  return (
    <>
      <div className="categories">
        <h3 className="categories__title">{title}</h3>
        {children}
      </div>

      {/* 
    <div className="widget catagory mb-50">
        
        <h6 className="widget-title mb-30">Catagories</h6>

        <div className="catagories-menu">
            <ul id="menu-content2" className="menu-content collapse show">
                
                <li data-toggle="collapse" data-target="#clothing">
                    <a href="#">clothing</a>
                    <ul className="sub-menu collapse show" id="clothing">
                        <Link to="/"
                        <li><a href="#">All</a></li>
                        <li><a href="#">Bodysuits</a></li>
                        <li><a href="#">Dresses</a></li>
                        <li><a href="#">Hoodies &amp; Sweats</a></li>
                        <li><a href="#">Jackets &amp; Coats</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Pants &amp; Leggings</a></li>
                        <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                        <li><a href="#">Shirts &amp; Blouses</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Sweaters &amp; Knits</a></li>
                    </ul>
                </li>
                
                <li data-toggle="collapse" data-target="#shoes" className="collapsed">
                    <a href="#">shoes</a>
                    <ul className="sub-menu collapse" id="shoes">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Bodysuits</a></li>
                        <li><a href="#">Dresses</a></li>
                        <li><a href="#">Hoodies &amp; Sweats</a></li>
                        <li><a href="#">Jackets &amp; Coats</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Pants &amp; Leggings</a></li>
                        <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                        <li><a href="#">Shirts &amp; Blouses</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Sweaters &amp; Knits</a></li>
                    </ul>
                </li>
                
                <li data-toggle="collapse" data-target="#accessories" className="collapsed">
                    <a href="#">accessories</a>
                    <ul className="sub-menu collapse" id="accessories">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Bodysuits</a></li>
                        <li><a href="#">Dresses</a></li>
                        <li><a href="#">Hoodies &amp; Sweats</a></li>
                        <li><a href="#">Jackets &amp; Coats</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Pants &amp; Leggings</a></li>
                        <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                        <li><a href="#">Shirts &amp; Blouses</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Sweaters &amp; Knits</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div> */}
    </>
  );
};

export default Categories;
