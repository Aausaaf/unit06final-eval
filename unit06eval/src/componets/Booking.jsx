import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
const Booking = () =>  {
     const [data,setdata] = useState({})
const {id} = useParams()
console.log(id)
useEffect(()=>{
    fetchs()
  },[])
  const fetchs = () => {
    fetch(`http://localhost:8080/movies/${id}`).then((res)=>res.json()).then(res=>{console.log(res)

 setdata(res)
 }).catch((err)=>console.log(err))
  }
return (
<>
<div className="container">

<p>Booking</p>
</div>
</>
)
}


export default Booking