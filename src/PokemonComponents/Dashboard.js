import React from "react";
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
     <div className="w-100 text-center mt-2">
       <Button variant="link" onClick={handleLogOut}>Log Out</Button> 
      </div>
    </>
    )
}
export default Dashboard; 