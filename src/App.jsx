// import { Header,Footer } from './components'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, loguout } from './store/authSlice';


function App() {
  const [loading , setLoading] =useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(dispatch(loguout()))
      }
    })
    .finally(()=>{setLoading(false)})
  },[])


  return !loading ? <>
    <div className=' bg-blue-500 text-black text-3xl'>Hello</div>
  </> : <h1>Loading...</h1>
}

export default App
