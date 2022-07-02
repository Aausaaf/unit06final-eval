import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"


const MovieDetails = () => {
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
    <div className="div2">
        <img src={data.poster_path} alt="" />
    </div>
    <div className="div3">
        <p>original_title: {data.original_title}</p>
        <p>title : {data.title}</p>
        <p>overview : {data.overview}</p>
        <p>popularity : {data.popularity}</p>
        <p>release_date : {data.release_date}</p>
        <p>vote_average : {data.vote_average}</p>
        <p>vote_count : {data.vote_count}</p>
        <button> Book Now </button>
    </div>
   </div>
   </>
  )
}

export default MovieDetails