import React, { use, useEffect, useRef, useState } from 'react'
import Container from '../commonlayouts/Container'
// import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Bottombar = () => {
  const [isDeopdownOpen, setIsDeopdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (event) => {
    
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDeopdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutSide);
  },[]);


  

  const handleDropdown = () => {
    setIsDeopdownOpen(!isDeopdownOpen);
  }
  return (
    <div className='bg-[#FF624C] '>
      <Container >
        <div className='flex justify-between items-center  font-bold py-[24px]'>
          <div>
            <ul className='flex items-center gap-[80px] font-["Montserrat"] leading-6 text-white '>
              <li><a href="/product-list" className='flex items-center gap-x-4'> <FaBars/>  All Catagories</a></li>
              
              <li className='relative' ref={dropdownRef}> 
                <button onClick={handleDropdown}>Porducts</button>
                {isDeopdownOpen && (
                  <div className='w-[200px] h-[250px] bg-white absolute mt-2 z-10 rounded  shadow-lg'>
                    <ul className='py-2 font-["Montserrat"] font-normal text-base leading-6 text-black'>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Product -1</li>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer '>Product -2</li>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer '>Product -3</li>
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer '>Product -4</li>
                    </ul>
                  </div>
                )}
              </li>

              <li> <a href="/blog">Blog</a></li>
              <li> <a href="/contact"> Contact</a></li>              
            </ul>
          </div>
          <div>
            <ul className='flex items-center gap-[80px] font-["Montserrat"] leading-6 text-white '>
              <li><a href="#" className='flex items-center gap-x-4'> LIMITED SALE 👋🏻</a></li>
              <li> <a href="#">Best Seller</a></li>
              <li> <a href="#">New Arival</a></li>
                         
            </ul>
          </div>
        </div>
        
      </Container>
    </div>
  )}

export default Bottombar
