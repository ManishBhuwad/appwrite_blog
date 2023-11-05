
import { useEffect, useState } from 'react'
import{useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import{ login, logout } from './store/authSlice'
import{Header, Footer} from './components/index'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div className='w-full mx-0 sm:w-11/12 sm:mx-auto min-h-screen flex flex-wrap content-between bg-gray-200'>
      <div className='w-full block'>
          <Header/>
          <main className='min-h-screen'>
           <Outlet/>
          </main>
          <Footer/>
      </div>
    </div>
  ) :null
}

export default App
