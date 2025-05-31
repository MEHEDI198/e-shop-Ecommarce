import React from 'react'
import Container from '../commonlayouts/Container'
import { IoMdSearch } from 'react-icons/io'

const Middlebar = () => {
  return (
    <Container>
      <div className='flex items-center justify-between py-8'>
        <div><img src="images/logo.png" alt="Logo" /></div>
        <div className='flex items-center gap-8'>
          <div className='relative flex items-center mr-[48px] '>
            <input className='w-[332px] border border-[#CCCCCC] py-[18px] px-6 rounded-[10PX]' placeholder='Search Products...' type="text" /> <IoMdSearch className='text-3xl absolute items-center right-4 text-[#303030]'/>
          </div>
          <div>Cart</div>
          <div>AC</div>
        </div>
      </div>
    </Container>
  )
}

export default Middlebar
