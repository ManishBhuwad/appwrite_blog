import React from 'react'
import{useDispatch}from 'react-redux'
import service from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = ()=>{
      service.logout().then(()=>{
        dispatch(logout())
      })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200
    text-white
    hover:bg-blue-100 rounded-full hover:text-black'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn