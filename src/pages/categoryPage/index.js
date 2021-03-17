import React, { useState, useRef } from 'react';
import Appbar from '../../components/appbar';
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer';
import ChevronDown from '../../images/down-chevron.svg';
import AppsIcon from './images/icons/apps_light.svg';
import BarsIcon from './images/icons/menu.svg';
import ProductCard from './components/ProductCard';

import BatteryImg_1 from './images/Products/battery_1.jfif';
import BatteryImg_2 from './images/Products/battery_2.jfif';
import BatteryImg_3 from './images/Products/battery_3.jfif';
import BatteryImg_4 from './images/Products/battery_4.jpg';

import EllipsisIcon from './images/icons/more.svg';
import PrevIcon from './images/icons/left-chevron.svg';
import NextIcon from './images/icons/right-chevron.svg';
import './styles/index.scss';

const productCards = [
  {
    id: 1,
    scu: 'SKU #319458',
    product: 'Duralast Platinum AGM Battery 51R-AGM Group Size 51R 435 CCA',
    image: BatteryImg_1
  },
  {
    id: 2,
    scu: 'SKU #755654',
    product: 'Duralast Platinum AGM Battery H6-AGM Group Size 48 760 CCA',
    image: BatteryImg_2
  },
  {
    id: 3,
    scu: 'SKU #547127',
    product: 'ACDelco Advantage Battery 24FS Group Size 24F 600 CCA',
    image: BatteryImg_3
  },
  {
    id: 4,
    scu: 'SKU #338292',
    product: 'ACDelco Advantage Battery 24S Group Size 24 600 CCA',
    image: BatteryImg_4
  }
]

export default function CategoryPage(props) {
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
    <div id="categoryPage" ref={mainPageRef} onScroll={appbarScrollCollapse}>
      <Appbar setIsSidebarOpen={setIsSidebarOpen} isAppbarCollapsed={isAppbarCollapsed} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className='category-wrapper'>
        <div className="flex-column">
          <div className="text breadcrumbs flex-row">
            <a href="" className="breadcrumb">Home</a>
            <span className="breadcrumb-divider">/</span>
            <a href="" className="breadcrumb">Auto Parts</a>
            <span className="breadcrumb-divider">/</span>
            <a href="" className="breadcrumb">Batteries, Starting And Charging</a>
            <span className="breadcrumb-divider">/</span>
            <a href="" className="breadcrumb bold-text">Batteries</a>
          </div>
          <div className="flex-row">
            <div className="category-page-title text uppercase-text bold-text">
              Top deals
            </div>
          </div>

          <div className="category-form" style={{ alignSelf: 'center' }}>
            <div className="flex-row full-height-pc">
              <div className="category-form-filter">
                <p className="filter-heading text bold-text uppercase-text">Filters</p>
                <div className="filter-bold-divider"></div>
                <p className="filter-block-title text bold-text uppercase-text">Brand</p>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">ACDelco Advantage (17)</label>
                </div>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">Duralast (38)</label>
                </div>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">Econocraft (8)</label>
                </div>
                <div className="filter-divider"></div>
                <p className="filter-block-title text bold-text uppercase-text">Price</p>
                <div className="filter-price-picker">
                  <input className="price-input low-price" type="text" />
                  <input className="price-input high-price" type="text" />
                  <button className="btn text uppercase-text medium-weight-text filter-price-btn">Filter</button>
                </div>
                <div className="filter-divider"></div>
                <p className="filter-block-title text bold-text uppercase-text">BATTERY GROUP SIZE DESIGNATION</p>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">121R (1)</label>
                </div>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">124R (1)</label>
                </div>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">26R (1)</label>
                </div>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">27F (3)</label>
                </div>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">67R (1)</label>
                </div>
                <div className="filter-checkbox">
                  <div className="checkbox-icon" />
                  <label htmlFor="" className="checkbox-label text light-weight-text">75DT (1)</label>
                </div>
              </div>
              <div className="category-form-products">
                <div className="products-topbar">
                  <p className="product-amount">Founded 204 products</p>
                  <div className="products-displaying">
                    <div className="item-per-page">
                      <p>Items per Page</p>
                      <div className="custom-select items-per-page-picker">
                        <div className="custom-select__trigger">
                          <span>12</span>
                          <div className="arrow">
                            <img src={ChevronDown} alt="" />
                          </div>
                        </div>
                        <div className="custom-options">
                        </div>
                      </div>
                    </div>
                    <div className="custom-select products-sorting">
                      <div className="custom-select__trigger">
                        <span>By the rating</span>
                        <div className="arrow">
                          <img src={ChevronDown} alt="" />
                        </div>
                      </div>
                      <div className="custom-options">
                      </div>
                    </div>
                    <div className="products-view">
                      <div className="tile-view view-button view-button-active">
                        <img src={AppsIcon} alt="" />
                      </div>
                      <div className="bar-view view-button">
                        <img src={BarsIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-cards">
                  {
                    productCards.map(item => {
                      return (
                        <ProductCard
                          key={item.id}
                          scu={item.scu}
                          title={item.product}
                          image={item.image}
                        />
                      )
                    })
                  }
                </div>
                <div className="products-pagination">
                  <div className="prev-page-arrow pagination-item">
                    <a href="">
                      <img src={PrevIcon} alt="" />
                    </a>
                  </div>
                  <div className="pagination-item text">
                    <span>1</span>
                  </div>
                  <div className="pagination-item text pagination-item-active">
                    <span>2</span>
                  </div>
                  <div className="pagination-item text">
                    <span>3</span>
                  </div>
                  <div className="pagination-item text">
                    <span>4</span>
                  </div>
                  <div className="ellipsis-arrow pagination-item">
                    <a href="">
                      <img src={EllipsisIcon} alt="" />
                    </a>
                  </div>
                  <div className="pagination-item text">
                    <span>9</span>
                  </div>
                  <div className="pagination-item text">
                    <span>10</span>
                  </div>
                  <div className="next-page-arrow pagination-item">
                    <a href="">
                      <img src={NextIcon} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}