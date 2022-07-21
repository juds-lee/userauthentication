import React, { useState } from "react";

import { useRef } from "react";
import { useAuth } from "../contexts/AuthContexts";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
    e.preventDefault()
    
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    }catch {
     setError("Failed to log in")
    }
     setLoading(false)
     }
   
    return (
   <div>
      <h2>Log In</h2>
          {error && <div className="danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input 
            id="email"
            type='email' 
            ref={emailRef}
            required
            placeholder="Enter your email"
            >
            </input>

           <input 
            id="password"
            type='password'
            ref={passwordRef}
            required
            placeholder='Enter your password'
            >
            </input>

            <button disabled={loading} type="submit">
              Log In
            </button>
        </form>
         <div>
            <Link to="/forgotpassword">Forgot Password</Link>
        </div>
      <div>
        Need an Account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Login;
