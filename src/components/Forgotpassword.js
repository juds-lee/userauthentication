import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
        </form>
        <div className="w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
        </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
       Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default Forgotpassword;
