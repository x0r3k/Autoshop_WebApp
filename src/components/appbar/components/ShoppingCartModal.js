import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import ShoppingCartProduct from './ShoppingCartProduct';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import RemoveShoppingCartSharpIcon from '@material-ui/icons/RemoveShoppingCartSharp';

import Photo1 from '../../../assets/images/battery_3.jfif';
import Photo2 from '../../../assets/images/battery_4.jpg';

import clsx from 'clsx';

const data = [{
  image: Photo1,
  title: 'ACDelco Advantage Battery 24FS Group Size 24F 600 CCA',
  amount: 1,
  price: 2500
},
{
  image: Photo2,
  title: 'ACDelco Advantage Battery 24S Group Size 24 600 CCA',
  amount: 2,
  price: 2500
}
];

const useStyles = makeStyles(theme => ({
  dialogTitle: {
    margin: 0,
    padding: theme.spacing(2),
    borderBottom: '1px solid #A4A4A4'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function ShoppingCartModal({ isOpen, setOpen }) {
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      fullWidth
      maxWidth='md'
      onClose={() => setOpen(false)}
      aria-labelledby="max-width-dialog-title"
    >
      {/* <DialogTitle>Shopping Cart</DialogTitle> */}
      <MuiDialogTitle disableTypography className={classes.dialogTitle}>
        <Typography variant="h6">Shopping Cart</Typography>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent>
        {/* <div className="cart_products">
          <div className="cart_product flex-row">
            <div className={clsx("cart_product-image", classes.cartProductImage)}>
              <img src={Photo1} alt="" />
            </div>
            <div className={clsx("cart_product-name", "flex", "flex-align-center", classes.cartProductName)}>
              <span className="text medium-weight-text">
                ACDelco Advantage Battery 24FS Group Size 24F 600 CCA
              </span>
            </div>
            <div className={clsx("cart_product-amount", "flex-column", classes.amountTotal)}>
              <span className="title text">Quantity</span>
              <div className={classes.quantityPicker}>
                <input type="text" className="grid-item quantity-picker-input" value={1} />
                <button className="grid-item quantity-picker-button plus-button">+</button>
                <button className="grid-item quantity-picker-button minus-button">-</button>
              </div>
            </div>
            <div className={clsx("cart_product-total", "flex-column", classes.amountTotal)}>
              <span className="title text">Total</span>
              <span className="value text">$2,500.00</span>
            </div>
            <div className="cart_product-remove flex flex-align-center">
              <IconButton>
                <RemoveShoppingCartSharpIcon />
              </IconButton>
            </div>
          </div>
        </div> */}
        {data.map(item => {
            return (
              <ShoppingCartProduct 
                image={item.image} 
                title={item.title}
                amount={item.amount}
                price={item.price}
              />
            )
          }
        )}

      </DialogContent>
      <DialogActions>
        <Button onClick={() => { }}>
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  )
}