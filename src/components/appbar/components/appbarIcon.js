import React, { useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  lightIcon: {
    color: 'white',
  },
  darkIcon: {
    color: 'black',
  },
  icon: {
    fontSize: '1.6rem'
  },
  lightBadge: {
    color: 'black',
    backgroundColor: 'white'
  },
  darkBadge: {
    color: 'white',
    backgroundColor: 'black'
  },
}));

export default function AppbarIcon({ id, Icon, badgeNumber, isAppbarCollapsed }) {
  const classes = useStyles();

  return (
    <div className="appbar-icon">
      <Badge badgeContent={badgeNumber || 0} color="primary" max={9} classes={{
        badge: isAppbarCollapsed ? classes.lightBadge : classes.darkBadge
      }}>
        <Icon className={clsx(isAppbarCollapsed ? classes.lightIcon : classes.darkIcon, classes.icon)}/>
      </Badge>
    </div>
    
  );
}