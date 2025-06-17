import React from 'react'
import Container from '../commonlayouts/Container'
import { IoMdSearch } from 'react-icons/io'
import Carticon from '../../icons/Carticon'
import Usericon from '../../icons/Usericon'

const Middlebar = () => {
  return (
    <Container>
      <div className='flex items-center justify-between py-8'>
        <div><img src="images/logo.png" alt="Logo" /></div>
        <div className='flex items-center gap-8'>
          <div className='relative flex items-center mr-[48px] '>
            <input className='w-[332px] border border-[#CCCCCC] py-[18px] px-6 rounded-[10PX]' placeholder='Search Products...' type="text" /> <IoMdSearch className='text-3xl absolute items-center right-4 text-[#303030]'/>
          </div>
          <div className='relative pl-[50px]'>
            <div className='absolute top-[5px] left-0'>
              <Carticon />
            </div>
            <p className='font-["Montserrat"] font-normal text-base leading-6'>Cart</p>
            <span className='font-["Montserrat"] font-bold text-sm leading-5'>$ 150,00</span>
          </div>
          <div className='relative pl-[50px] ml-[90px] relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-47PX] after:top-[50%] after:-translate-y-[50%]'>
            <div className='absolute top-[5px] left-0'>
              <Usericon/>
            </div>
            <p className='font-["Montserrat"] font-normal text-base leading-6'>User</p>
            <span className='font-["Montserrat"] font-bold text-sm leading-5'>Account</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Middlebar
