import React, { useState, useRef } from 'react';
import Appbar from '../../components/appbar';
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer';

import BatteryImg_4 from '../categoryPage/images/Products/battery_4.jpg';

import './styles/index.scss';


export default function ProductPage(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppbarCollapsed, setIsAppbarCollapsed] = useState(false);
  const mainPageRef = useRef();

  const appbarScrollCollapse = () => {
    let scrollTop = mainPageRef.current.scrollTop;
    if (scrollTop > 50 && !isAppbarCollapsed) {
      setIsAppbarCollapsed(true);
      console.log('collapsed')
    }
    else if (scrollTop <= 50 && isAppbarCollapsed) {
      setIsAppbarCollapsed(false);
      console.log('not-collapsed')
    }
  };

  return (
    <div id="productPage" ref={mainPageRef} onScroll={appbarScrollCollapse}>
      <Appbar setIsSidebarOpen={setIsSidebarOpen} isAppbarCollapsed={isAppbarCollapsed} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className='product-wrapper'>
        <div className="flex-column">
          <div className="text breadcrumbs flex-row">
            <a href="" className="breadcrumb">Home</a>
            <span className="breadcrumb-divider">/</span>
            <a href="" className="breadcrumb">Auto Parts</a>
            <span className="breadcrumb-divider">/</span>
            <a href="" className="breadcrumb">Batteries, Starting And Charging</a>
            <span className="breadcrumb-divider">/</span>
            <a href="" className="breadcrumb">Batteries</a>
            <span className="breadcrumb-divider">/</span>
            <a href="" className="breadcrumb bold-text">ACDelco Advantage Battery 24S Group Size 24 600 CCA</a>
          </div>
          <div className="product-main-part">
            <div className="product-photos">
              <div className="product-photos-mini">
                <img src={BatteryImg_4} alt=""/>
                <img src={BatteryImg_4} alt=""/>
                <img src={BatteryImg_4} alt=""/>
              </div>
              <div className="product-photos-main">
                <img src={BatteryImg_4} alt=""/>
              </div>
              
            </div>
            <div className="product-main-info">
              <div className="main-info-title"></div>
              <div className="flex-row"> {/*space between */}
                <div className="main-info-rating"></div>
                <div className="main-info-scu"></div>
              </div>
              <div className="flex-row">
                <div className="main-info-price"></div>
                <div className="main-info-part_number"></div>
              </div>
              <div className="main-info-divider"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}