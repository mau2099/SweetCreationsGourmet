import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DeleteOutlineIcon from '@material-ui/icons/Delete';
import '../assets/styles/App.scss';
import '../assets/styles/components/Cart.scss';
import { toggleDrawer, deleteFromCart } from '../actions';

const useStyles = makeStyles({
  list: {
    minwidth: 600,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    width: '100%',
  },
});

const Cart = (props) => {
  const classes = useStyles();
  const { cart = [], sidebarisOpen } = props;

  const handleDrawer = (side, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    console.log('cerrando div', props);
    props.toggleDrawer(open);
    console.log('props', props);
  };

  const handleDeleteFromCart = (product) => (event) => {
    event.preventDefault();
    props.deleteFromCart(product);
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={handleDrawer(side, false)}
      onKeyDown={handleDrawer(side, false)}
    >
      <List>
        {cart.map((cartItem, index) => (
          <ListItem button key={cartItem.id} className='cartitem-container'>
            <img className='cart-image' src={cartItem.image} alt='' />

            <button
              className='delete-button'
              onClick={handleDeleteFromCart(cartItem)}
              type='button'
            >
              <DeleteOutlineIcon />
            </button>
            <ListItemText primary={` ${cartItem.title} `} />
            <ListItemText primary={`$ ${cartItem.price}`} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Link to='/checkout'>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          size='large'
        >
          Realizar Pedido
        </Button>
      </Link>
    </div>
  );

  return (
    <div>
      <Drawer
        anchor='right'
        open={sidebarisOpen}
        onClose={handleDrawer('right', false)}
      >
        {sideList('right')}
      </Drawer>
    </div>
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
  deleteFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
