import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import '../assets/styles/CoreStyle.scss';
import {
  FavoriteBorder,
  PermIdentity,
  ShoppingBasketOutlined,
} from '@material-ui/icons';
import logo from '../assets/static/images/Logo_SweetCreations.png';
import SearchInput from './Search';
import Cart from './Cart';
import PositionedSnackbar from './PositionedSnackbar';
import { toggleDrawer } from '../actions';

const Header = (props) => {
  const { cart, sidebarisOpen } = props;

  const handleOpenCart = (open) => (event) => {
    if (cart.length === 0) {
      return;
    }

    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    props.toggleDrawer(open);
  };

  return (
    <header className='header_area'>
      <div className='classy-nav-container d-flex align-items-center justify-content-between light left breakpoint-on'>
        <nav className='classy-navbar' id='essenceNav'>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='Sweet Creations' />
          </Link>
          {/*<Link to='/products'>Productos</Link>|
           <Link to='/productDetail'>Detalle de Productos</Link>|
          <Link to='/categories'>Categorias</Link> */}
        </nav>
        <SearchInput />

        <div className='header-meta d-flex clearfix justify-content-end'>
          <div className='favourite-area'>
            <Link to='#'>
              <FavoriteBorder />
            </Link>
          </div>
          <div className='user-login-info'>
            <Link to='/login'>
              <PermIdentity />
            </Link>
          </div>
          <div className='cart-area'>
            {sidebarisOpen && <Cart />}
            <button
              className='cart-button'
              onClick={handleOpenCart(true)}
              type='button'
            >
              <ShoppingBasketOutlined />
              <span>
                {cart.length > 0 && (
                  <div className='Header-alert'>{cart.length}</div>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    sidebarisOpen: state.sidebarisOpen,
  };
};

const mapDispatchToProps = {
  toggleDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
