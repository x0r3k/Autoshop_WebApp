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
              <div className="main-info-title bold-text">ACDelco Advantage Battery 24S Group Size 24 600 CCA</div>
              <div className="flex-row" style={{justifyContent: 'space-between'}}> {/*space between */}
                <div className="main-info-rating">Stars rating</div>
                <div className="main-info-scu"><span>SKU #338292</span></div>
              </div>
              <div className="flex-row" style={{justifyContent: 'space-between'}}>
                <div className="main-info-price">
                  <span>$2,500.00</span>
                </div>
                <div className="main-info-part_number"><span>Part #H5-AGM</span></div>
              </div>
              <div className="main-info-divider"></div>
              <p className="main-info-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the standard dummy text. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="main-info-divider"></div>
              <div className="flex-row main-info-quantity">
                <div className="quantity-picker">
                  <input type="text" className="grid-item quantity-picker-input"/>
                  <button className="grid-item quantity-picker-button plus-button">+</button>
                  <button className="grid-item quantity-picker-button minus-button">-</button>
                </div>
                <button className="btn text uppercase-text medium-weight-text">ADD TO CART </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}