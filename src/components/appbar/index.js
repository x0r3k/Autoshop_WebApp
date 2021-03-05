import React, {useEffect, useState} from 'react';
import './styles/style.scss';
import SearchIcon from './img/icons/loupe.svg';
import UserIcon from './img/icons/user.svg';
import FavoritesIcon from './img/icons/heart.svg';
import ShoppingCartIcon from './img/icons/shopping-cart_1.svg';
import CarIcon from './img/icons/car_1.svg';

import MenuIcon from './img/icons/menu.svg';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';

import AppbarIcon from './components/appbarIcon';

export default function Appbar({setIsSidebarOpen}) {
  const mockData = [
    {
      id: 'search-icon-id',
      className: 'search-icon',
      Icon: SearchIcon,
    },
    {
      id: 'user-icon-id',
      className: 'user-icon',
      Icon: UserIcon,
    },
    {
      id: 'favorites-icon-id',
      className: 'favorites-icon',
      Icon: FavoritesIcon,
    },
    {
      id: 'shopping_cart-icon-id',
      className: 'shopping_cart-icon',
      Icon: ShoppingCartIcon,
    },
    {
      id: 'car-icon-id',
      className: 'car-icon',
      Icon: CarIcon,
    },
  ]


  return (
    <nav className="appbar appbar-custom fixed-top">
      <div className="appbar-sidebar-toggler col-5" onClick={() => setIsSidebarOpen(true)}>
          <img src={MenuIcon} alt=""/>
      </div>
      <a href="#" className="appbar-logo col-2">
        <span className="text bold-text">Auto</span>
        <span className="text">shop</span>
      </a>
      <div className="appbar-items col-5">
        {
          mockData.map((item) => 
            <AppbarIcon
              id={item.id}
              key={item.id}
              customClass={item.className}
              Icon={item.Icon}
            />
          )
        }
      </div>
    </nav>
  );
}