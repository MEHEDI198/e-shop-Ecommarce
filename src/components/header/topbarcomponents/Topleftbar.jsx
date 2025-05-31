import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'

const Topleftbar = () => {
  return (
    <div className='flex items-center gap-[50px] font-["Montserrat"] font-normal text-sm relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[62%] after:top-[-6px] text-[#303030]'>
        <a href="https://maps.app.goo.gl/D1KRzHcMzFt47dvs8" target='_blank' className='flex items-center gap-2 text-[#303030]'> <IoLocationOutline /> 123 Main Street, Anytown USA </a>
        <a href="tel: 01774577133" className='flex items-center gap-2 text-[#303030]'><FiPhone /> +1 (555) 123-4567 </a>
        {/* <link rel="stylesheet" href="tel: 01630379239"> +1 (555) 123-4567</link>  */}
    </div>
  )
}

export default Topleftbar
