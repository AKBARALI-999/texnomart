import React from 'react'
import './Banner.css'
import bannerPhoto from '../../assets/4kW7L6LzTGdJG0Q36KQpmltTBwpoYnWh5ZkPA180.webp'


function Banner() {
  return (
    <div className='banner container'>
    
      <img src={bannerPhoto} alt="" />
    </div>
  )
}

export default Banner