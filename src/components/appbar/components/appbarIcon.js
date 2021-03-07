import React, {useEffect} from 'react';
// import clsx from 'clsx';

export default function AppbarIcon({id, customClass, icon_dark, icon_light, badgeNumber, isAppbarCollapsed}) {

  return (
    <div className="appbar-icon">
      <div className={customClass}>
        <a href="">
          <img src={isAppbarCollapsed ? icon_light : icon_dark}></img>
        </a>
      </div>
      {
        badgeNumber && (
          <span className="appbar-icon-badge">
            {badgeNumber > 9 ? "9+" : badgeNumber}
          </span>
        )
      }
    </div>
  );
}