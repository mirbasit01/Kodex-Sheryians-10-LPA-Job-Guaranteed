
import React, { useState } from 'react'

function Login({handelLogin}) {

//    console.log(handelLogin)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
//   two wat bindings jab  yh fome h 
 const  submitHandler = (e)=>{
    e.preventDefault()
    handelLogin(email, password)
    console.log("Email is ", email)
    console.log('password is ', password)
    // clear inputs after form submission
   setemail("")
    setpassword("")
 }
  return (

    <div className='flex h-screen w-screen items-center justify-center' >
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
         <form  
         onSubmit={(e)=>{
            submitHandler(e)
         }}
           className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
            }}
             required
              className='outline-none bg-transparent border-2 border-emerald-600
             text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email ' 
             />
            <input 
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 
            text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' 
            />
            <button className='outline-none my-5 w-[267px] border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white font-bold'>Log in</button>
         </form>
        </div>
        </div>
  )
}
export default Login