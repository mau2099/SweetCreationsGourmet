import React from 'react';
import '../assets/styles/App.scss';
import { Link } from 'react-router-dom';
import { linen } from 'color-name';
import {
  FavoriteBorder,
  AddCircle,
  ShoppingBasketOutlined,
} from '@material-ui/icons';
import Filter from '../components/Filter';

import imgCupcake from '../assets/img/cupcakes/red-velvet-cupcake.jpg';
import '../assets/styles/CoreStyle.scss';
import '../assets/styles/components/ListProducts.scss';

const ListProducts = () => {
  return (
    <>
      {/* id, image, title, description, price */}
      <div className='row'>
        <div className='col-12'>
          <h2>Pantalla de Listado de productos</h2>
        </div>
      </div>
      <div className='row'>
        <Filter />

        <div className='listProducs__container col-12 col-sm-8'>
          <div className='single-product-wrapper'>
            <div className='product-img'>
              <img src={imgCupcake} alt='' />

              <img className='hover-img' src={imgCupcake} alt='' />

              <div className='product-favourite'>
                <Link to='/login'>
                  <FavoriteBorder />
                </Link>
              </div>
            </div>

            <div className='product-description'>
              <span>topshop</span>
              <Link to='/productDetail/'>
                <h6>Knot Front Mini Dress</h6>
              </Link>

              <p className='product-price'>$80.00</p>

              <div className='hover-content'>
                <div className='add-to-cart-btn'>
                  <Link to='/' className='btn essence-btn'>
                    <AddCircle />
                    <ShoppingBasketOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='single-product-wrapper'>
            <div className='product-img'>
              <img src={imgCupcake} alt='' />

              <img className='hover-img' src={imgCupcake} alt='' />

              <div className='product-favourite'>
                <Link to='/login'>
                  <FavoriteBorder />
                </Link>
              </div>
            </div>

            <div className='product-description'>
              <span>topshop</span>
              <Link to='/productDetail/'>
                <h6>Knot Front Mini Dress</h6>
              </Link>

              <p className='product-price'>$80.00</p>

              <div className='hover-content'>
                <div className='add-to-cart-btn'>
                  <Link to='/' className='btn essence-btn'>
                    <AddCircle />
                    <ShoppingBasketOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='single-product-wrapper'>
            <div className='product-img'>
              <img src={imgCupcake} alt='' />

              <img className='hover-img' src={imgCupcake} alt='' />

              <div className='product-favourite'>
                <Link to='/login'>
                  <FavoriteBorder />
                </Link>
              </div>
            </div>

            <div className='product-description'>
              <span>topshop</span>
              <Link to='/productDetail/'>
                <h6>Knot Front Mini Dress</h6>
              </Link>

              <p className='product-price'>$80.00</p>

              <div className='hover-content'>
                <div className='add-to-cart-btn'>
                  <Link to='/' className='btn essence-btn'>
                    <AddCircle />
                    <ShoppingBasketOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='single-product-wrapper'>
            <div className='product-img'>
              <img src={imgCupcake} alt='' />

              <img className='hover-img' src={imgCupcake} alt='' />

              <div className='product-favourite'>
                <Link to='/login'>
                  <FavoriteBorder />
                </Link>
              </div>
            </div>

            <div className='product-description'>
              <span>topshop</span>
              <Link to='/productDetail/'>
                <h6>Knot Front Mini Dress</h6>
              </Link>

              <p className='product-price'>$80.00</p>

              <div className='hover-content'>
                <div className='add-to-cart-btn'>
                  <Link to='/' className='btn essence-btn'>
                    <AddCircle />
                    <ShoppingBasketOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='single-product-wrapper'>
            <div className='product-img'>
              <img src={imgCupcake} alt='' />

              <img className='hover-img' src={imgCupcake} alt='' />

              <div className='product-favourite'>
                <Link to='/login'>
                  <FavoriteBorder />
                </Link>
              </div>
            </div>

            <div className='product-description'>
              <span>topshop</span>
              <Link to='/productDetail/'>
                <h6>Knot Front Mini Dress</h6>
              </Link>

              <p className='product-price'>$80.00</p>

              <div className='hover-content'>
                <div className='add-to-cart-btn'>
                  <Link to='/' className='btn essence-btn'>
                    <AddCircle />
                    <ShoppingBasketOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='single-product-wrapper'>
            <div className='product-img'>
              <img src={imgCupcake} alt='' />

              <img className='hover-img' src={imgCupcake} alt='' />

              <div className='product-favourite'>
                <Link to='/login'>
                  <FavoriteBorder />
                </Link>
              </div>
            </div>

            <div className='product-description'>
              <span>topshop</span>
              <Link to='/productDetail/'>
                <h6>Knot Front Mini Dress</h6>
              </Link>

              <p className='product-price'>$80.00</p>

              <div className='hover-content'>
                <div className='add-to-cart-btn'>
                  <Link to='/' className='btn essence-btn'>
                    <AddCircle />
                    <ShoppingBasketOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
