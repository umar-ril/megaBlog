import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Protected({children , authentication = true}) {
    const [loader,setLoader] =useState(true)
    const navigate = useNavigate()
    const authStatus  = useSelector(state => state.status)

    useEffect(()=>{
      if (authentication && authStatus !== authentication) {
        navigate('/megaBlog/login')
      }else if (!authentication && authStatus !== authentication) {
        navigate('/megaBlog/')
      }
        setLoader(false)
    },[authStatus ,navigate ,authentication])

  return loader? <h1>Loading...</h1> : <>{children}</>
}
