import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login"
import Forgotpassword from "./Forgotpassword";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
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
