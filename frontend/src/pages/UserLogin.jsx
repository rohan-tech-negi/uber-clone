
import { useState } from "react"
import {Link} from "react-router-dom"
const UserLogin = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [userData, setUserData] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault()
    setUserData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
    
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
       <div>
        <img className='w-16 ml-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input type= "email" required value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} placeholder="email@example.com" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input type="password" required value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }} placeholder="password" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"/>
        <button className="bg-[#111] mb-7 rounded px-4 py-2 text-lg w-full text-white font-semibold placeholder:text-base">Login</button>
        
      </form>
      <p className="text-center">New here? <Link to="/signup" className="text-blue-600">Create new Account</Link></p>
       </div>
       <div>
        <Link to="/captain-login" className="bg-[#111] flex items-center justify-center mb-5 rounded px-4 py-2 text-lg w-full text-white font-semibold placeholder:text-base">Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin