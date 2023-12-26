import React from 'react'
import myimage from '../assets/mdb-high-resolution-logo.png'

function Logo(width = '100px') {
  return (
    <div className=' flex-none sm:flex items-center text-red-600'><img src={myimage} alt="logo-img" className='w-12' /></div>
  )
}

export default Logo
