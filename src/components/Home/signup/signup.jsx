import React from 'react'
import { useState} from 'react';
import './signup.css'
import axios from 'axios';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'



const signin = () => {
  const nav=useNavigate();
  const [user,setUser]=useState({
    yourName:"",
    yourEmail:"",
    yourPassword:""
   });
   const onChangeButton=(e)=>
   {
      setUser({...user,[e.target.name]:e.target.value});
   }
   const onSubmitButton=async(e)=>
   {
    e.preventDefault();
    // const formData = new FormData();
     let data={
      yourName:user.yourName,yourEmail:user.yourEmail,yourPassword:user.yourPassword
     };

    // formData.append("yourName", user.yourName); // "file" matches backend multer setup
    // formData.append("yourEmail",user.yourName);
    // formData.append("yourPassword",user.yourPassword);
    const res=await axios.post("http://localhost:5500/api/review/signup",data);
    if(res.status===200)
    {
      let token=res.data.token;
      localStorage.setItem("token",token);
      console.log("successfully created user"+token);
       if(res.data.success){
                    setUser({
                     yourName:"",
                     yourEmail:"",
                     yourPassword:""
                    })
                    toast.success(res.data.message)
                    nav("/");

                 }
                 else{
                    toast.error(res.data.message);
                 }

    }
   }
  return (
    <div>
       <div className='login-popup'>
      <form  className="login-popup-container" onSubmit={onSubmitButton}>
        <div className="login-popup-title">
            <h2>Sign Up</h2>
{/* 
            <img   alt="" /> */}
        </div>
        <div className="login-popup-inputs">
            <input name='yourName' onChange={onChangeButton}  type="text" value={user.yourName} placeholder='Your Name' required />
            
            <input name='yourEmail' onChange={onChangeButton} type="text"   value={user.yourEmail} placeholder='Your Email' required />
            <input name='yourPassword' onChange={onChangeButton} type="password" value={user.yourPassword}    placeholder='Password' required/>

        </div>
        <button type='submit'>Create Account</button>
        <div style={{display:'flex', justifyItems:'start'}}>
         <input style={{width:24,height:24}} type="checkbox" required/>
        <div className="login-popup-condition">
          <p style={{paddingLeft: 15, paddingTop: 10}}>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        </div>
        {/* {currState==="Login"
        ?<p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span> </p>: */}
        <p>Already have an account? <span style={{color:'red'}}><a href='/login'>Login here</a></span></p>
      </form>
    </div>
    </div>
  )
}

export default signin
