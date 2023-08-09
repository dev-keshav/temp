import React, { useState } from 'react'
import axios from "axios"
const Register = () => {
    const [info, setInfo] = useState({
        username:"",
        email:"",
        password:""
    })
    
    const handleChange = (e)=>{
         const {name , value} = e.target;

         setInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            
            const res = await axios.post("http://localhost:4000/api/user/register",info) ;
            const {user} = res.data;
            localStorage.setItem('userId', user._id);
        } catch (error) {
            console.log(error.message)
        }
        


    }

    

  return (
    <div>
        <form>
            <label htmlFor="username">username</label>
            <input type="text" name="username" onChange={(e)=>handleChange(e)}  required/>
            <label htmlFor="email">email</label>
            <input type="email" name='email' onChange={(e)=>handleChange(e)}  required/>
            <label htmlFor="password">password</label>
            <input type="password" name='password' onChange={(e)=>handleChange(e)} required />
            <button onClick={(e)=>{handleSubmit(e)}}>Register</button>
        </form>
    </div>
  )
}

export default Register
