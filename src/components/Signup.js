import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContexts";


const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();

    function handleSubmit(e){
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
    }
   
    return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>

            <Button className="w-100" type="submit">
              Sign Up
            </Button>
        </form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? 
      </div>
    </>
  )
}

export default Signup;
