import React from 'react'
import Container from './commonlayouts/Container'
import Productlayout from './commonlayouts/Productlayout'

const Featuredproduct = () => {
  return (
   <Container>
    <div className='flex gap-1'>
        <Productlayout/>
        <Productlayout/>
        <Productlayout/>
        <Productlayout/>
        <Productlayout/>
    </div>
    
   </Container>
  )
}

export default Featuredproduct
