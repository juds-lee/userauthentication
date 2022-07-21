import Signup from "./AuthComponents/Signup";
import PokemonApp from "./PokemonApp";
import Login from "./AuthComponents/Login"
import Forgotpassword from "./AuthComponents/Forgotpassword";
import React from "react";
import PrivateRoute from "./AuthComponents/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
      <div >
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
  );
}

export default App;
