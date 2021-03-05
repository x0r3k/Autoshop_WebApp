import React from 'react';
import { Route } from 'react-router-dom';

export default function PrivatePage({ Component, isPrivate, ...rest }) {
  console.log(Component);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isPrivate) {
          return (
            <Component {...props} />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}