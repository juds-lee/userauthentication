import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    
    async function handleLogOut(){
        setError("")
        try{
          await logout()
          navigate("/login")
        }catch{
        setError('Failed to log out')
        }
    }
    return(
    <>
    <Card>
        <Card.Body> 
            <h2>TITLE HERE</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Welcome! </strong>{currentUser.email}
        </Card.Body>
    </Card>
     <div className="w-100 text-center mt-2">
       <Button variant="link" onClick={handleLogOut}>Log Out</Button> 
      </div>
    </>
    )
}
export default Dashboard; 