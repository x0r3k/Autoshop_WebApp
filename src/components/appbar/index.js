import React, {useEffect, useState} from 'react';
import './styles/style.scss';
import clsx from 'clsx';
import useStyles from './styles/style';
import MenuIconDark from './img/icons/menu_dark.svg';
import MenuIconLight from './img/icons/menu_light.svg';
import BackIconDark from './img/icons/arrow_left.svg';
import AppbarIcon from './components/appbarIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import DriveEtaSharpIcon from '@material-ui/icons/DriveEtaSharp';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const mockData = [
  {
    id: 'search-icon-id',
    className: 'search-icon',
    Icon: SearchSharpIcon,
    badgeNumber: null
  },
  {
    id: 'user-icon-id',
    className: 'user-icon',
    Icon: AccountCircleIcon,
    badgeNumber: null
  },
  {
    id: 'shopping_cart-icon-id',
    className: 'shopping_cart-icon',
    Icon: ShoppingCartSharpIcon,
    badgeNumber: 11
  },
  {
    id: 'car-icon-id',
    className: 'car-icon',
    Icon: DriveEtaSharpIcon,
    badgeNumber: 2
  },
]

export default function Appbar({setIsSidebarOpen, isAppbarCollapsed, simpleAppbar}) {
  const classes = useStyles();
  const [language, setLanguage] = useState('UA');

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
                  // customClass={item.className}
                  Icon={item.Icon}
                  // icon_light={item.icon_light}
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