/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import Navigation from './Navigation';

const Layout = (props) => (
  <div className="layout">
    {/* <Navigation /> */}
    <main className="main">
      { props.children }
    </main>
  </div>
);

export default Layout;
