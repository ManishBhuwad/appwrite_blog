import React from 'react'
import myimage from '../assets/logo3.png'

function Logo(width = '100px') {
  return (
    <div className=' flex-none sm:flex items-center text-red-600'><img src={myimage} alt="logo" className='w-12' /></div>
  )
}

export default Logo
