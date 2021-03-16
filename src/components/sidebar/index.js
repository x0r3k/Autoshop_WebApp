import React from 'react';
import './styles/style.scss';
import clsx from 'clsx';

const catgoriesData = [
  'Brake system', 'Engine and exhaust system', 'Suspension and steering', 'Transmission', 
  'Cooling and heating', 'Electrics and lighting', 'Body and components', 'Auto-chemical goods'
]

export default function Sidebar ({setIsOpen, isOpen}) {

  return (
    <div className="sidebar-wrapper">
      <nav className={clsx('sidebar', 'sidebar-custom', 'custom-scrollbar', {'active': isOpen})}>
        
        <div className="sidebar-block">
          <div className="sidebar-block-heading bold-text uppercase-text">Categories</div>
          {
            catgoriesData.map(item => {
              return (
                <div className="sidebar-block-item text">
                  <a href="">{item}</a>
                </div>
              )
            })
          }
        </div>
        <div className="sidebar-divider"></div>
        <div className="sidebar-block">
          <div className="sidebar-block-heading bold-text uppercase-text">Help</div>
          <div className="sidebar-block-item text">
            <a href="">
              Delivery
            </a>
          </div>
          <div className="sidebar-block-item text">
            <a href="">
              Warranty
            </a>
          </div>
        </div>
        <div className="sidebar-divider"></div>
        <div className="sidebar-block">
          <div className="sidebar-block-heading bold-text uppercase-text">Information</div>
          <div className="sidebar-block-item text">
            <a href="">
              About us
            </a>
          </div>
          <div className="sidebar-block-item text">
            <a href="">
              Privacy policy
            </a>
          </div>
          <div className="sidebar-block-item text">
            <a href="">
              Contacts
            </a>
          </div>
        </div>
        
      </nav>
      <div className={clsx('sidebar-overlay', {'active': isOpen})} onClick={() => setIsOpen(false)}/>
    </div>

  );
}