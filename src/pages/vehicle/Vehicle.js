import React, { useState, useRef } from 'react';
import VehicleCard from './components/vehicleCard';
import Appbar from '../../components/appbar';
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer';
import './styles/index.scss';

const vehicleCards = [
  {
    id: 1,
    isActive: true,
    title: '2004 FORD FOCUS 2.0L FI DOHC 4CYL'
  },
  {
    id: 2,
    isActive: false,
    title: '2020 MAZDA TRUCK CX-5 SPORT AWD 2.5L DI DOHC 4CYL'
  },
  {
    id: 3,
    isActive: false,
    title: '2019 AUTOCAR MD/HD XSPOTTER OFF ROAD 6.7L DIESEL 6CYL'
  },
  {
    id: 4,
    isActive: false,
    title: '2011 BMW M3 4.0L FI DOHC 8CYL'
  },
  {
    id: 5,
    isActive: false,
    title: '2020 AUDI A4 PREMIUM 2.0L FI TURBO DOHC 4CYL'
  }
]

export default function VehiclePage(props) {
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
    <div id="vehiclePage" ref={mainPageRef} onScroll={appbarScrollCollapse}>
      <Appbar setIsSidebarOpen={setIsSidebarOpen} isAppbarCollapsed={isAppbarCollapsed} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className='vehicle-wrapper flex-row'>
        <div className="vehicle-form">
          <div className="top-row flex-row">
            <div className="vehicle-form-title text uppercase-text semibold-weight-text">My vehicles</div>
            <button className="btn text uppercase-text medium-weight-text">Add new car</button>
          </div>

          <div className="vehicle-cards">
            {vehicleCards.map(item => {
              return (
                <VehicleCard
                  key={item.id}
                  isActive={item.isActive}
                  title={item.title}
                />
              ) 
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}