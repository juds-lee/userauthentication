import React from "react";
import { Card, Button } from "react-bootstrap";

const Dashboard = () => {
    const [error, setError] = useState("");
    function handleLogOut(){

    }

    return(
    <>
    <Card>
        <Card.Body> 
            <h2>TITLE HERE</h2>
            {error && <Alert variant="danger">{error}</Alert>}

        </Card.Body>
    </Card>
     <div className="w-100 text-center mt-2">
       <Button variant="link" onclick={handleLogOut}>Log Out</Button> 
      </div>
    </>
    )
}
export default Dashboard; 