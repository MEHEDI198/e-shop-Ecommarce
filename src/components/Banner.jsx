import React from 'react'
import Container from '../components/commonlayouts/Container'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='mt-[32px] mb-[80px]'>
        <Container> 
            <Link to="/">
                <img src="images/banner.png" alt="banner" />
            </Link>
         </Container>
    </div>
  )
}

export default Banner
