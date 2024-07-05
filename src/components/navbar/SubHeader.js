import React from 'react'
import './navbar.css'
import { FaLocationDot } from "react-icons/fa6";
import { RiPlanetLine } from "react-icons/ri";
function SubHeader() {
  return (
    <div className='subheader'>
      <div className="container">
        <div className="subheader-wrapper">
          <div className="subheader-item">
          <div className="boxx">
            <a className='a__teg' href="/"><FaLocationDot />  Toshkent </a>
            <p className="titel">Bizning do'konlarimiz</p>
            <p className="titel">Yuridik shaxslar uchun</p>
            <p className="titel">To'lov usullari</p>
            
          </div>
          </div>
          <div className="subheader-item">
            <p> </p>
          </div>

          <div className="subheader-item">
          <div className="boxx1">
            <p className='titel'>Aloqa markazi :</p>
            <h2 className='titel'>+99871 209 99 44 </h2>
            <h2 className='titel'><RiPlanetLine className='icoka' /> UZｖ</h2>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SubHeader