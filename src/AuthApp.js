import Signup from "./AuthComponents/Signup";
import PokemonApp from "./PokemonApp";
import Login from "./AuthComponents/Login"
import Forgotpassword from "./AuthComponents/Forgotpassword";
import React from "react";
import PrivateRoute from "./AuthComponents/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
   >
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/"
                element={
                  <PrivateRoute>
                    <PokemonApp />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgotpassword" element={<Forgotpassword/>} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    
  );
}

export default App;
