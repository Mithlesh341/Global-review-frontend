import React, { useState } from 'react'

function login() {
   
    return (
        <div>
           <div className='login-popup'>
          <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>Login</h2>
    
                <img   alt="" />
            </div>
            <div className="login-popup-inputs"> 
                <input name='email' type="text" placeholder='Your Email' required />
                <input name='password' type="text" placeholder='Password' required/>
            </div>
            <button type='submit'>Login</button>
            <div style={{display:'flex', justifyItems:'start'}}>
             <input style={{width:24,height:24}} type="checkbox" required/>
            <div className="login-popup-condition">
              <p style={{paddingLeft: 15, paddingTop: 10}}>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            </div>
            {/* {currState==="Login"
            ?<p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span> </p>: */}
            {/* <p>Don't have an account? <span style={{color:'red'}}>Login here</span></p> */}
          </form>
        </div>
        </div>
      )
}

export default login
