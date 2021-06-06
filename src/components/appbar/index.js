import React, { useEffect, useState } from 'react';
import './styles/style.scss';
import clsx from 'clsx';
import useStyles from './styles/style';
import MenuIconDark from './img/icons/menu_dark.svg';
import MenuIconLight from './img/icons/menu_light.svg';
import AppbarIcon from './components/AppbarIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import DriveEtaSharpIcon from '@material-ui/icons/DriveEtaSharp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import ShoppingCartModal from './components/ShoppingCartModal';


export default function Appbar({ setIsSidebarOpen, isAppbarCollapsed, simpleAppbar }) {
  const mockData = [
    {
      id: 'search-icon-id',
      className: 'search-icon',
      Icon: SearchSharpIcon,
      badgeNumber: null,
      onClick: () => { }
    },
    {
      id: 'user-icon-id',
      className: 'user-icon',
      Icon: AccountCircleIcon,
      badgeNumber: null,
      onClick: () => { }
    },
    {
      id: 'shopping_cart-icon-id',
      className: 'shopping_cart-icon',
      Icon: ShoppingCartSharpIcon,
      badgeNumber: 11,
      onClick: () => setOpen(true)
    },
    {
      id: 'car-icon-id',
      className: 'car-icon',
      Icon: DriveEtaSharpIcon,
      badgeNumber: 2,
      onClick: () => { }
    },
  ]

  const classes = useStyles();
  const [language, setLanguage] = useState('UA');
  const [open, setOpen] = useState(false);

  return (
    <div className="appbar">
      <nav className={clsx("appbar-custom", { "collapsed-appbar": isAppbarCollapsed })}>
        {
          simpleAppbar
            ? (
              <div className="col-5 flex-row flex-align-center">
                <div className="appbar-items">
                  <AppbarIcon
                    Icon={ArrowBackIcon}
                  />
                </div>
                <p className="text bold-text uppercase-text" style={{ fontSize: '24px' }}>
                  Back
                </p>
              </div>
            )
            : (
              <div className="appbar-sidebar-toggler col-5" >
                <img src={isAppbarCollapsed ? MenuIconLight : MenuIconDark} alt="" onClick={() => setIsSidebarOpen(true)} />
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
                <FormControl className={clsx(isAppbarCollapsed ? classes.lightLanguageSelect : classes.darkLanguageSelect)}>
                  <Select
                    id="demo-customized-select"
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    IconComponent={KeyboardArrowDownIcon}
                  >
                    <MenuItem value={"UA"}>UA</MenuItem>
                    <MenuItem value={"RU"}>RU</MenuItem>
                    <MenuItem value={"EN"}>EN</MenuItem>
                  </Select>
                </FormControl>
                {
                  mockData.map((item) =>
                    <AppbarIcon
                      id={item.id}
                      key={item.id}
                      onClick={item.onClick}
                      Icon={item.Icon}
                      badgeNumber={item.badgeNumber}
                      isAppbarCollapsed={isAppbarCollapsed}
                    />
                  )
                }
              </div>
            )
        }
      </nav>
      <ShoppingCartModal isOpen={open} setOpen={setOpen} />
    </div>
  );
}