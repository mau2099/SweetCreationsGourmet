import React from 'react';
import '../assets/styles/App.scss';
import { Link } from 'react-router-dom';
import { linen } from 'color-name';
import {
  FavoriteBorder,
  AddCircle,
  ShoppingBasketOutlined,
} from '@material-ui/icons';
import { connect } from 'react-redux';
import { addToCart, getTotalPrice } from '../actions';
import Filter from '../components/Filter';
import imgCupcake from '../assets/img/cupcakes/red-velvet-cupcake.jpg';
import imgCupcake2 from '../assets/img/cupcakes/chai-latte-cupcakes.jpg';
import imgCupcake3 from '../assets/img/cupcakes/cookies-cupcake.png';
import imgCupcake4 from '../assets/img/cupcakes/rosa-cupcake.jpg';
import imgCupcake5 from '../assets/img/cupcakes/unicorn-cupcake.jpg';
import imgCupcake6 from '../assets/img/cupcakes/vainilla-cupcake.jpg';

import '../assets/styles/CoreStyle.scss';
import '../assets/styles/components/ListProducts.scss';

const ListProducts = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
    props.getTotalPrice();
  };

  return (
    /* id, image, title, description, price */
    <div className='row'>
      <Filter />

      <div className='listProducts__container col-12 col-sm-9'>
        {products.map((product) => (
          <div className='single-product-wrapper' key={product.id}>
            <div className='product-img'>
              <img src={product.image} alt='' />

              <img className='hover-img' src={product.image} alt='' />

              <div className='product-favourite'>
                <Link to='/login'>
                  <FavoriteBorder />
                </Link>
              </div>
            </div>

            <div className='product-description'>
              <span>{product.title}</span>
              <Link to='/productDetail/'>
                <h6>{product.description}</h6>
              </Link>

              <p className='product-price'>${product.price}</p>

              <div className='hover-content'>
                <div className='add-to-cart-btn'>
                  <button
                    type='button'
                    className='btn essence-btn'
                    onClick={() => handleAddToCart(product)}
                  >
                    <AddCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = {
  addToCart,
  getTotalPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
