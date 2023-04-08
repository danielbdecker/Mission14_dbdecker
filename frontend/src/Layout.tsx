import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

//puts navbar at top with whatever route is routed from app beneath in the outlet
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
