import React from 'react'
import { Outlet } from 'react-router-dom';
import Topbar from '../header/Topbar';
import Middlebar from '../header/Middlebar';
import Bottombar from '../header/Bottombar';
import Header from '../header/Header';

const Commonlayout = () => {
  return (
    <>  
      <Header /> 
      <Outlet />
      <div>Footer</div>
      
    </>
  ) 
}

export default Commonlayout
