import React from 'react'

function NavbarBottom() {


  const data = [
    "🔥 AKSIYALAR",
    "006 promotion",
    "HAVO SOVUTGICHLAR",
    "SMARTFONLAR",
    "MUZLATGICHLAR",
    "CHANGYUTGICHLAR",
    "NOU",
    "TELEVIZORL",
    "БАРЧА КАТЕГОРИЯЛАР",
  ]

  return (
    <div className='navbar-bottom container'>
      {
        
        data.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })
      }
      
    </div>
  )
}

export default NavbarBottom