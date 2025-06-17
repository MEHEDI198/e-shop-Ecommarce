import Container from '../commonlayouts/Container';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi';



const Footerbottom = () => {
  return (
    <>
      <div className='mt-[100px]'> 
        <Container>
         <div className="flex">
          <div>
            <img className='cursor-[pointer]' src="/images/logo.png" alt="Logo"/>
            <ul className='mt-[158px] flex flex-col gap-3 font-["Montserrat"] font-normal text-base cursor-[pointer]'>
              <li><a href="tel: 01774577133" className='flex items-center gap-2 text-[#303030]'><FiPhone /> +1 (555) 123-4567 </a> </li>
              <li> <a href="mailto: mehdi.hassan198@gmai.com" target='_blank' className='flex items-center gap-2 text-[#303030]'> <TfiEmail /> information@eshop.com</a></li>
              <li> <a href="https://maps.app.goo.gl/D1KRzHcMzFt47dvs8" target='_blank'  className='flex items-center gap-2 text-[#303030]'> <IoLocationOutline/> 123 Main Street, Suite 105, Anytown USA</a></li>
            </ul>      
          </div>
          <div className='ml-[167px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl mb-6 cursor-[pointer]'>Links</h4>
            <ul className='flex flex-col gap-3 font-["Montserrat"] font-normal text-base text-[#303030] cursor-[pointer]'>
              <li><a href="#">Products List</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Products Guide</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Tech Blog</a></li>              
            </ul>
          </div>
          <div className='ml-[96px]'>
            <h4 className='font-[Poppins] font-semibold text-xl mb-6 cursor-[pointer]'>Supports</h4>
            <ul className='flex flex-col gap-3 font-["Montserrat"] font-normal text-base text-[#303030] cursor-[pointer]'>
              <li><a href="#"> About Us </a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Return Policy </a></li>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Store Locations</a></li>              
              <li><a href="#">Careers</a></li>              
            </ul>
          </div>
          <div className='ml-[96px]' >
            <h4 className='font-[Poppins] font-semibold text-xl mb-6 cursor-[pointer]'>Supports</h4>
            <ul className='flex flex-col gap-3 font-["Montserrat"] font-normal text-base text-[#303030] cursor-[pointer]'>
              <li><a href="#"> Computers & Tablets </a></li>
              <li><a href="#">Mobile Phones & Accessories</a></li>
              <li><a href="#">TV & Home Theater </a></li>
              <li><a href="#">Audio & Headphones</a></li>
              <li><a href="#">Cameras & Camcorders</a></li>              
              <li><a href="#">Gaming Equipment</a></li>              
              <li><a href="#">Home Appliances</a></li>                         
            </ul>
          </div>
          <div className='ml-[80px]'>
            <h4 className='font-[Poppins] font-semibold text-xl mb-6 cursor-[pointer]'>Payments</h4>
            <img className='cursor-[pointer]' src="/images/payment.png" alt="payment"/>
            <h4 className='font-[Poppins] font-semibold text-xl mt-[66px] mb-6 cursor-[pointer]'>Follow Us</h4>
            <ul className='flex flex-col gap-4 cursor-[pointer] text-[#303030]'>
              <li><a href="#"><img src="/images/facebook.png" alt="Facebook" /></a></li>
              <li><a href="#"><img src="/images/twitter.png" alt="Twitter" /></a></li>
              <li><a href="#"><img src="/images/instagram.png" alt="Instagram" /></a></li>
              {/* <li><a href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></a></li> */}
            </ul>
          </div>
         </div>
         <div className="flex justify-between items-center mt-[80px] border-solid border-t-[1px] border-[#CCCCCC] pt-3 text-[#646464] font-['Poppins'] font-normal text-base mb-[139px]">
          <div>Copyright © 2023 E-Shop. All Rights Reserved.</div>
          <div>Privacy Policy   |   Terms & Condition   |   Sitemap</div>
         </div>
        </Container>
      </div>  
    </>
  )
}

export default Footerbottom
