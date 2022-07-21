import React, { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContexts";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e){
    e.preventDefault()
    
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    }catch {
     setError("Failed to reset password")
    }
     setLoading(false)
     }
   
    return (
    <div>
      <h2>Reset Password</h2>
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

            <button disabled={loading} className="w-100" type="submit">
             Reset Password
            </button>
        </form>
    
      <div>
        Need an Account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Forgotpassword;
