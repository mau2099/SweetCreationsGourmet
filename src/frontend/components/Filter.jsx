import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/App.scss";
import "../assets/styles/CoreStyle.scss";

const Filter = () => {
  console.log("mostrando componente filter");
  return (
    <div className="shop_sidebar_area col-12 col-md-4 col-lg-3">
      <div className="widget price mb-50">
        <h6 className="widget-title mb-30">¡Como te gustaría tu postre?</h6>

        <p className="widget-title2 mb-30">Precios</p>

        <div className="widget-desc">
          <div className="slider-range">
            <div
              data-min="49"
              data-max="360"
              data-unit="$"
              className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
              data-value-min="49"
              data-value-max="360"
              data-label-result="Range:"
            >
              <div className="ui-slider-range ui-widget-header ui-corner-all" />
              <span className="ui-slider-handle ui-state-default ui-corner-all" />
              <span className="ui-slider-handle ui-state-default ui-corner-all" />
            </div>
            <div className="range-price">Precio: $49.00 - $360.00</div>
          </div>
        </div>
      </div>
      
      <div className="widget color mb-50">
        <p className="widget-title2 mb-30">Presentación</p>
        <div className="widget-desc">
          <ul className="d-flex">
            <li>
              <Link to="/">Cupccake</Link>
            </li>
            <li>
              <Link to="/">Muffin</Link>
            </li>
            <li>
              <Link to="/">Galletas</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget brands mb-50">
        <p className="widget-title2 mb-30">Sabores</p>
        <div className="widget-desc">
          <ul>
            <li>
              <Link to="/">Fresa</Link>
            </li>
            <li>
              <Link to="/">Maracuyá</Link>
            </li>
            <li>
              <Link to="/">Kiwi</Link>
            </li>
            <li>
              <Link to="/">Mango</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
