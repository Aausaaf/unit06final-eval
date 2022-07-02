import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { LOGIN,logins } from '../redux/action'
import { useNavigate } from 'react-router'
const Login = () => {
  const navigate = useNavigate()
    const {log} = useSelector((store)=>store)
    const [name,setname] = useState("")
const [password,setpasward] = useState("")
const [all,setall] = useState({})
    const dispatch = useDispatch()
   console.log(log.login)
   useEffect(()=>{
    fetchs()
    
},[all])
const fetchs = () => {
    fetch(`https://reqres.in/api/login`,{
      method: "POST",
      body:JSON.stringify(all)
      ,
      headers: {
        "content-Type": "application/json"
      }
        
    
    }).then((res)=> res.json()).then((res) => {
      console.log(res)
      if(res.token)
      {
       console.log(res.token)
       alert("You have Successfully Login Go To Hoge page Page")
       navigate("/")
       dispatch(logins(res.token))
      }
    }).catch((err)=>{
      console.log(err)
    })
}
console.log(all)
  return (
    <>
       <div className="logi">
       <input type="text" value={name} placeholder="Enter User Name" onChange={(e)=>{
          setname(e.target.value)
       }} />
       <input type="text" value={password} placeholder="Enter Password" onChange={(e)=>{
          setpasward(e.target.value)
       }} />
       <button className='button' onClick={()=>{
        const tem = {
            email:name,
            password:password
        }
        setall(tem)
       }}>Login</button>
       </div>
    </>
  )
}

export default Login