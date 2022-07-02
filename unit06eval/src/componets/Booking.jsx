import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
const Booking = () =>  {
     const [data,setdata] = useState([])

useEffect(()=>{
    fetchs()
  },[])
  const fetchs = () => {
    fetch(`http://localhost:8080/moviesBooked`).then((res)=>res.json()).then(res=>{console.log(res)

 setdata(res)
 }).catch((err)=>console.log(err))
  }
return (
<>
<div className="booking">
{
   
   data.map((ele)=>{
       return (
        <>
        <div className="div4">
           <p>Name : {ele.name}</p>
           <p>Seat : {ele.seat}</p>
       </div>
        </>
       )
   })
}
</div>
</>
)
}


export default Booking