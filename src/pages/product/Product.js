import React, { useState, useRef } from 'react';
import Appbar from '../../components/appbar';
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer';

import BatteryImg_4 from '../../assets/images/battery_4.jpg';

import BlackCircleIcon from '../../assets/icons/black-circle.svg';

import './styles/index.scss';

const descriptionList = [
  'Overall terminal design minimizes acid leaks, seepage, corrosion, and black post, which helps the terminal posts to stay clean and corrosion-free',
  'Both positive and negative grids are Lead-Calcium alloy, maximizing corrosion resistance, optimizes cycle life and minimizes water consumption to optimize battery durability',
  'Premium alloys and high-density paste for maximum performance',
  'Envelope Separator design, helps eliminate shorting and corrode-through to maximize reliability and battery life',
  'Manufactured with dozens of quality control checks to provide ACDelco quality'
]

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
                <img src={BatteryImg_4} alt="" />
                <img src={BatteryImg_4} alt="" />
                <img src={BatteryImg_4} alt="" />
              </div>
              <div className="product-photos-main">
                <img src={BatteryImg_4} alt="" />
              </div>

            </div>
            <div className="product-main-info">
              <div className="main-info-title bold-text">ACDelco Advantage Battery 24S Group Size 24 600 CCA</div>
              <div className="flex-row" style={{ justifyContent: 'space-between' }}> {/*space between */}
                <div className="main-info-rating">Stars rating</div>
                <div className="main-info-scu"><span className="text">SKU #338292</span></div>
              </div>
              <div className="flex-row" style={{ justifyContent: 'space-between' }}>
                <div className="main-info-price">
                  <span className="text">$2,500.00</span>
                </div>
                <div className="main-info-part_number">
                  <span className="text">Part #H5-AGM</span>
                </div>
              </div>
              <div className="main-info-divider"></div>
              <p className="main-info-description text light-weight-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the standard dummy text.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="main-info-divider"></div>
              <div className="flex-row main-info-quantity">
                <div className="quantity-picker">
                  <input type="text" className="grid-item quantity-picker-input" value={1} />
                  <button className="grid-item quantity-picker-button plus-button">+</button>
                  <button className="grid-item quantity-picker-button minus-button">-</button>
                </div>
                <button className="btn text uppercase-text medium-weight-text">ADD TO CART </button>
              </div>
              <div className="flex-row">
                <div className="wishlist icon-button">
                  <div className="icon-button-image" />
                  <span>Add to wishlist</span>
                </div>
                <div className="comparelist icon-button">
                  <div className="icon-button-image" />
                  <span>Add to compare</span>
                </div>
              </div>
              <div className="main-info-divider"></div>
              <p className="main-info-notes text light-weight-text">
                Notes: OE Exact Fit. *** 680 cold cranking amps ***. OE manufacturer used various size batteries in production. Verify battery size
              </p>
            </div>
          </div>
          <div className="product-tabs flex-row flex-center">
            <div className="product-tab active uppercase-text">Description</div>
            <div className="product-tab uppercase-text">Characteristics</div>
            <div className="product-tab uppercase-text">Reviews (10)</div>
          </div>
          <div className="product-description-wrapper flex-row flex-center">
            <div className="product-description">
              <p className="product-description-text text uppercase-text">
                Duralast Platinum is an Absorbed Glass Mat (AGM) battery designed to give you the ultimate combination of power
                , durability and flexibility. Delivering maximum Cold Cranking Amps and Reserve Capacity,
                Duralast Platinum provides safe, reliable power to vehicles with multiple electronic accessories.
              </p>
              <div className="product-description-list">
                {
                  descriptionList.map((item, id, array) => {
                    if (id == array.length - 1) {
                      return (
                        <div key={id}>
                          <div className="description-list-item">
                            <img src={BlackCircleIcon} alt="" className="list-item-bullet" />
                            <p className="list-item-text text uppercase-text">
                              {item}
                            </p>
                          </div>
                        </div>
                      )
                    }
                    else {
                      return (
                        <div key={id}>
                          <div className="description-list-item">
                            <img src={BlackCircleIcon} alt="" className="list-item-bullet" />
                            <p className="list-item-text text uppercase-text">
                              {item}
                            </p>
                          </div>
                          <div className="description-list-divider"></div>
                        </div>
                      )
                    }

                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}