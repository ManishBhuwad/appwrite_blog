import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        //TODO: make it more easy to understand
        if(authentication && authentication !== authStatus){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authentication])
  return loader ? <h1>loading....</h1> : <>{children}</>
}

