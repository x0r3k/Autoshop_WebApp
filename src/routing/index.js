import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import routerConfig from './routerConfig';
import PrivatePage from '../pages/PrivatePage.js';

function Router(props) {
  return (
    <Fragment>
      <Switch>
        {
          routerConfig.map(item => {
            return (
              <PrivatePage
                id={item.id}
                path={item.path}
                isPrivate={item.isPrivate}
                Component={item.Component}
                exact
                key={item.id}
              />
            );
          })
        }
        <Route component={() => <div>404</div>} />
      </Switch>
    </Fragment>
  );
}

export default Router;