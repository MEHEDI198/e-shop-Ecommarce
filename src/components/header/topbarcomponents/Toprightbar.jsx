import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Toprightbar = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    { name: 'United State', value: 'US', flag: 'https://flagcdn.com/16x12/us.png' },
    { name: 'Canada', value: 'CA', flag: 'https://flagcdn.com/16x12/ca.png' },
    { name: 'United King', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' },
    { name: 'Australia', value: 'AU', flag: 'https://flagcdn.com/16x12/au.png' },
    { name: 'Germany', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
    { name: 'France', value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
  ];

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };
    // const handleCurrencyChange = (e) => {
    const currencies = [
        { name: 'Bangladesh', value: 'BDT'  },
        { name: 'United States', value: 'USD' },
        { name: 'Canada', value: 'CAD' },
        { name: 'Australia', value: 'AUSD' },
        { name: 'Britain', value: 'GBP' },
        { name: 'french', value: 'EUR' },
    ];

    const [currency, setCurrency] = useState(null);

    const handleChange = (e) => {
        const selectedCurrency = currencies.find((c) => c.value === e.target.value);
        setCurrency(selectedCurrency);
    };

  return (
    <div className='flex items-center justify-end gap-[49px] '>
        <div>            
            <select
                name="currency"
                className="gap-6 px-3 py-2 "
                value={currency?.value || ''}
                onChange={handleChange}>
                <option value="" className='bg-[#BFBFBF]'>Select Currency</option>
                {currencies.map((c) => (
                <option className='bg-[#BFBFBF]' key={c.value} value={c.value}>
                    {c.value}
                </option>
                ))}
            </select>              
        </div>

        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF]  after:left-[-25px] after:top-[50%] after:-translate-y-[50%] before:content-[""] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF]  before:left-[185px] before:top-[50%] before:-translate-y-[50%]'>
            {/* <select name="country" 
            className='w-[175px] hidden'
            value={selectedCountry?.value || ''} 
            onChange={(e) =>{
                const country = countries.find((c)=> c.value === e.target.value)
                setSelectedCountry(country);
            }}>
                {countries.map((country, index) => (
                    <option value={country.value}>
                        {country.name}
                    </option>
                ))}
            </select>   */}
            {/* {cusotm dorpdown} */}
            <div className=' w-[175px] flex items-center  p-2 coursor-poienter'
            onClick={() =>setIsOpen(!isOpen)} >
                {selectedCountry ?
                <>
                 <img src={selectedCountry?.flag} alt={selectedCountry?.name} className=' w-[16px] h-[12px] mr-2' />
                 <span className='mr-5'>{selectedCountry?.name}</span>
                 <IoIosArrowDown />
                </>
                 :
                 <span className='gap-3 flex items-center'> Select Country <IoIosArrowDown /></span>
                }
            </div>

            {/* option list */}
            {isOpen && (
                <ul className='absolute w-full bg-white border border-gray-300 shadow-lg z-10 '>
                    {countries.map((country, index) => (
                        <li 
                        key={country.value}
                        className='flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleSelect(country)}>
                             <img src={country?.flag} alt={country?.name} className='w-[16px] h-[12px]' />
                            {country.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <div className='flex gap-6' >
            <a href=" https://www.facebook.com/"><FaFacebookF /></a>
            <a href="#"><FaTwitter /> </a>
            <a href="https://www.instagram.com/">  <FaInstagram /></a>            
        </div>
    </div>
  )
}

export default Toprightbar
