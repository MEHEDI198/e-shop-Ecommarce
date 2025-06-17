import React from 'react'
import Container from '../../components/commonlayouts/Container'
import Button from '../../components/Button'

const Footertop = () => {
  return (
    <Container>
        <div className='bg-[linear-gradient(90deg,_rgba(244,244,244,1)_39%,_rgba(217,217,217,1)_52%)] py-[114px] px-[100px] rounded-[24px]'>
            <h3 className=' font-["Poppins"] font-semibold text-4xl'>Get Our Updates</h3>
            <p className='font-["Montserrat"] font-normal text-xl max-w-[475px] leading-[30px] mt-4 mb-8'>Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
            <input className='w-[494px] bg-white border border-[#CCCCCC] py-[18px] px-6 rounded-[10px] mb-[16px]' type="text" placeholder='Enter your email address ...' /><br/>
            <Button text="Subscribe"/>

        </div>
    </Container>
  )
}

export default Footertop
