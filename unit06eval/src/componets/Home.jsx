import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { add } from '../redux/reduxhome/action'
const Home = () => {
  const naviagte = useNavigate()
  const {dats} = useSelector((store)=>store)
  const dispatch = useDispatch()
  console.log(dats)
  const [dat,setdat] = useState([])
  useEffect(()=>{
    fetchs()
  },[])
  const fetchs = () => {
    fetch("http://localhost:8080/movies").then((res)=>res.json()).then(res=>{console.log(res)
  setdat(res)
  dispatch(add(res))
 }).catch((err)=>console.log(err))
  }
  console.log(dat)
  return (
   <>
   <div className="home">
    {
    
      dat.map((ele)=>{
        return (
          <>
          <div className="div1">
           <div className="imgbox"> <img src={ele.poster_path} alt="" /></div>
           <p>{ele.title}</p>
           <button
           onClick={()=>{
              naviagte(`/movie/${ele.id}`)
           }}>More Details</button>
          </div>
          </>
        )
      })
    }
   </div>
   </>
  )
}

export default Home