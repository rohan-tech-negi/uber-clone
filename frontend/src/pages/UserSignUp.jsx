import React from 'react'
import { useState } from "react"
import {Link} from "react-router-dom"

const UserSignUp = () => {

  return (
      <div className="p-7 h-screen flex flex-col justify-between">
       <div>
        <img className='w-16 ml-10' src="https://imgs.search.brave.com/LEN4L2sGxxOs3uS5JVcLLAmVzFeQgbVrSFw6n9u4YPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWdueW91cndh/eS5uZXQvYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8x/MS9VYmVyX0xvZ29f/QmxhY2tfUkdCLmpw/Zw" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-5'>
          <input type= "text" required value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} placeholder="firstname" className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-base"/>
         <input type= "text" required value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} placeholder="lastname" className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"/>
        </div>
        
        <h3 className="text-base font-medium mb-2">What's your email</h3>
        <input type= "email" required value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} placeholder="email@example.com" className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"/>
        <h3 className="text-base font-medium mb-2">Enter Password</h3>
        <input type="password" required value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }} placeholder="password" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"/>
        <button className="bg-[#111] mb-7 rounded px-4 py-2 text-lg w-full text-white font-semibold placeholder:text-sm">Login</button>
        
      </form>
      <p className="text-center">Already have a account? <Link to="/login" className="text-blue-600">Login here</Link></p>
       </div>
       <div>
        <p className='text-[6px] leading-tight'>Consent</p>
       </div>
    </div>
  )
}

export default UserSignUp