import React, {useEffect} from 'react';
import clsx from 'clsx';

export default function AppbarIcon({id, customClass, Icon}) {

  return (
    <div className="appbar-icon">
      <div className={customClass}>
        <a href="">
          <img src={Icon}></img>
        </a>
      </div>
    </div>
  );
}

//material-ui
/* <div className="appbar-icon">
      <div className={customClass}>
        <Badge badgeContent={4} color="primary">
          <Icon fontSize='small'/>
        </Badge>
      </div>
    </div> */