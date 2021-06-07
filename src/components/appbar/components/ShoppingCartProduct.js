import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveShoppingCartSharpIcon from '@material-ui/icons/RemoveShoppingCartSharp';
import prepareTotalPrice from '../../../utils/prepareTotalPrice';

import Photo1 from '../../../assets/images/battery_3.jfif';

const useStyles = makeStyles(theme => ({
  cartProductImage: {
    width: '10%',
    minWidth: '100px',
    "& img": {
      width: '100%',
    }
  },
  cartProductName: {
    marginLeft: '15px',
    flexGrow: 1,
    "& span": {
      fontSize: '14px',
    }
  },
  quantityPicker: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateRows: '1fr 1fr',
    width: '60px',
    height: '40px',
    marginRight: '1rem',

    "& .grid-item:first-child": {
      gridRow: '1 / 3'
    },

    "& .quantity-picker-button": {
      border: '2px solid black',
      backgroundColor: 'white',
      borderLeft: 'none',
    },

    "& .plus-button": {
      height: '21px',
      cursor: 'pointer',
    },
  
    "& .minus-button": {
      borderTop: 'none',
      height: '19px',
      cursor: 'pointer',
    },

    "& .quantity-picker-input": {
      width: '100%',
      textAlign: 'center',
      fontSize: '14px',
      border: '2px solid black',
    }
  },
  amountTotal: {
    marginRight: '10px',
    "& .title": {
      color: "#808080",
      marginBottom: '10px',
    },
    "& .value": {
      fontSize: '14px',
      marginBottom: '10px',
    },
    
  }
}));

export default function ShoppingCartProduct({image, title, price, amount}) {
  const classes = useStyles();
  let total = prepareTotalPrice(amount, price, '$');
  return (
    <div className="cart_products">
      <div className="cart_product flex-row">
        <div className={clsx("cart_product-image", classes.cartProductImage)}>
          <img src={image} alt="" />
        </div>
        <div className={clsx("cart_product-name", "flex", "flex-align-center", classes.cartProductName)}>
          <span className="text medium-weight-text">
            {title}
          </span>
        </div>
        <div className={clsx("cart_product-amount", "flex-column", classes.amountTotal)}>
          <span className="title text">Quantity</span>
          <div className={classes.quantityPicker}>
            <input type="text" className="grid-item quantity-picker-input text" value={amount} />
            <button className="grid-item quantity-picker-button plus-button">+</button>
            <button className="grid-item quantity-picker-button minus-button">-</button>
          </div>
        </div>
        <div className={clsx("cart_product-total", "flex-column", classes.amountTotal)}>
          <span className="title text">Total</span>
          <span className="value text">{total}</span>
        </div>
        <div className="cart_product-remove flex flex-align-center">
          <IconButton>
            <RemoveShoppingCartSharpIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}