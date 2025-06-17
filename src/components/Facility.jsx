import React from 'react'
import Container from './commonlayouts/Container'
import Headphone from '../icons/Headphone'
import Transparent from '../icons/Transparent'
import Delivery from '../icons/Delivery'
import Security from '../icons/Security'

const Facility = () => {
  return (
    <div className='mb-[80px]'>
      <Container>
        <div className='flex items-center justify-between '>
            <div className='flex item-center gap-6 '>
              <div className='flex items-center '>
                <Headphone/>
              </div>
              <div>
                <h6 className='font-[Montserrat] font-bold text-base' >Responsive</h6>
                <p className='font-[Montserrat] font-normal text-base'>Customer service available 24/7</p>
              </div>
            </div>
            <div className='flex item-center gap-6 '>
              <div className='flex items-center '>
                <Security/>
              </div>
              <div>
                <h6 className='font-[Montserrat] font-bold text-base' >Secure</h6>
                <p className='font-[Montserrat] font-normal text-base'>Certified marketplace since 2017</p>
              </div>
            </div>
            <div className='flex item-center gap-6 '>
              <div className='flex items-center '>
                <Delivery/>
              </div>
              <div>
                <h6 className='font-[Montserrat] font-bold text-base' >Shipping</h6>
                <p className='font-[Montserrat] font-normal text-base'>Free, fast, and reliable worldwide</p>
              </div>
            </div>
            <div className='flex item-center gap-6 '>
              <div className='flex items-center '>
                <Transparent/>
              </div>
              <div>
                <h6 className='font-[Montserrat] font-bold text-base' >Transparent</h6>
                <p className='font-[Montserrat] font-normal text-base'>Hassle-free return policy</p>
              </div>
            </div>

                      
        </div>
      </Container>
    </div>
  )
}

export default Facility
