import React from 'react';
import Navbar from '../Navbar';
import './style.scss';
function Layout({ children }) {
  return (
    <div className='container'>
      <div className='layout'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
