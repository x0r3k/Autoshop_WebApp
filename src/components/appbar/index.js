import React, {useEffect, useState} from 'react';
import './styles/style.scss';
import clsx from 'clsx';
import SearchIconDark from './img/icons/loupe_dark.svg';
import UserIconDark from './img/icons/user_dark.svg';
import FavoritesIconDark from './img/icons/heart_dark.svg';
import ShoppingCartIconDark from './img/icons/shopping-cart_dark.svg';
import CarIconDark from './img/icons/car_dark.svg';

import SearchIconLight from './img/icons/loupe_light.svg';
import UserIconLight from './img/icons/user_light.svg';
import FavoritesIconLight from './img/icons/heart_light.svg';
import ShoppingCartIconLight from './img/icons/shopping-cart_light.svg';
import CarIconLight from './img/icons/car_light.svg';

import MenuIconDark from './img/icons/menu_dark.svg';
import MenuIconLight from './img/icons/menu_light.svg';

import BackIconDark from './img/icons/arrow_left.svg';

import AppbarIcon from './components/appbarIcon';

export default function Appbar({setIsSidebarOpen, isAppbarCollapsed, simpleAppbar}) {
  const mockData = [
    {
      id: 'search-icon-id',
      className: 'search-icon',
      icon_dark: SearchIconDark,
      icon_light: SearchIconLight,
      badgeNumber: null
    },
    {
      id: 'user-icon-id',
      className: 'user-icon',
      icon_dark: UserIconDark,
      icon_light: UserIconLight,
      badgeNumber: null
    },
    // {
    //   id: 'favorites-icon-id',
    //   className: 'favorites-icon',
    //   icon_dark: FavoritesIconDark,
    //   icon_light: FavoritesIconLight,
    //   badgeNumber: null
    // },
    {
      id: 'shopping_cart-icon-id',
      className: 'shopping_cart-icon',
      icon_dark: ShoppingCartIconDark,
      icon_light: ShoppingCartIconLight,
      badgeNumber: 11
    },
    {
      id: 'car-icon-id',
      className: 'car-icon',
      icon_dark: CarIconDark,
      icon_light: CarIconLight,
      badgeNumber: 2
    },
  ]


  return (
    <nav className={clsx("appbar", "appbar-custom", {"collapsed-appbar": isAppbarCollapsed})}>
      {
        simpleAppbar 
        ? (
          <div className="col-5 flex-row">
            <div className="appbar-items">
              <AppbarIcon
                icon_dark={BackIconDark}
              />
            </div>
            <p className="text bold-text uppercase-text" style={{fontSize: '24px'}}>
              Back
            </p>
          </div>
        )
        : (
          <div className="appbar-sidebar-toggler col-5" >
            <img src={isAppbarCollapsed ? MenuIconLight : MenuIconDark} alt="" onClick={() => setIsSidebarOpen(true)}/>
          </div>
        )
      }
      
      <a href="#" className="appbar-logo col-2">
        <span className="text bold-text">Auto</span>
        <span className="text">shop</span>
      </a>
      {
        simpleAppbar 
        ? (
          <div className="col-5"></div>
        )
        : (
          <div className="appbar-items col-5">
            {
              mockData.map((item) => 
                <AppbarIcon
                  id={item.id}
                  key={item.id}
                  customClass={item.className}
                  icon_dark={item.icon_dark}
                  icon_light={item.icon_light}
                  badgeNumber={item.badgeNumber}
                  isAppbarCollapsed={isAppbarCollapsed}
                />
              )
            }
          </div>
        )
      }
      
    </nav>
  );
}