import React from 'react'
import Container from '../commonlayouts/Container';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Topleftbar from './topbarcomponents/Topleftbar';
import Toprightbar from './topbarcomponents/Toprightbar';

const Topbar = () => {
  return (
    <div className='border-b border-[#BFBFBF] border-solid py-[22px]'>
        <Container> 
            <div className='flex justify-between items-center font-["Montserrat"] font-normal text-sm text-[#303030]'>
              <Topleftbar />
              <Toprightbar/>
            </div>
        </Container>

    </div>
  )
}

export default Topbar
