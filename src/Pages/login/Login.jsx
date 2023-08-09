import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [user,setUser] = useState({
        password:"",
        email:""
    })
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }    
    
    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/api/user/login",user);
            localStorage.setItem('userId', res.data.user._id);
            console.log(res.data)
            navigate("/")

        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>
    <form>
        <label htmlFor="email">email</label>
        <input type="email" name='email' onChange={(e)=>(handleChange(e))}  required/>
        <label htmlFor="password">password</label>
        <input type="password" name='password' onChange={(e)=>(handleChange(e))}  required />
        <button onClick={(e)=>{handleLogin(e)}}>Login</button>
    </form>
</div>
  )
}

export default Login
