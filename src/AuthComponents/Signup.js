import React, { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContexts";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e){
       e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError("Passwords do not match")
      }
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate("/")
      }catch {
        setError("failed to create account")
      }
      setLoading(false)
      }
   
    return (
    <div>
      <h2>Sign Up</h2>
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

            <input 
            id="passwordConfirmation"
            type='passwordConfirmation'
            ref={passwordConfirmRef}
            required
            placeholder='Enter your password'
            >
            </input>

            <button disabled={loading} type="submit">
              Sign Up
            </button>
        </form>
    
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}

export default Signup;
