import React, { useState, useRef } from 'react';
import './styles/index.scss';
import Appbar from '../../components/appbar';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
import HomePart from './components/home/HomePart';
import TopDealsPart from './components/topDeals/TopDeals';
import DealOfWeek from './components/dealOfWeek/DealOfWeek';
import Partners from './components/partners/Partners';

export default function Main(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppbarCollapsed, setIsAppbarCollapsed] = useState(false);
  const mainPageRef = useRef();

  const appbarScrollCollapse = () => {
    // console.log(123);
    let scrollTop = mainPageRef.current.scrollTop;
    if(scrollTop != 0 && !isAppbarCollapsed) {
      setIsAppbarCollapsed(true);
      // console.log('collapsed')
    }
    else if(scrollTop == 0 && isAppbarCollapsed){
      setIsAppbarCollapsed(false);
      // console.log('not-collapsed')
    }
  };

  return (
    <div id="mainPage" ref={mainPageRef} onScroll={appbarScrollCollapse}>
      <Appbar setIsSidebarOpen={setIsSidebarOpen} isAppbarCollapsed={isAppbarCollapsed} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <HomePart />
      <TopDealsPart/>
      <DealOfWeek/>
      <Partners/>
      <Footer/>
    </div>
  );
}