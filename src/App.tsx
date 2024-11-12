import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"
import Home from "./pages/Home"



function App(){
  return (
    <div style={{width: '500px', height: '100vh', borderColor:'black', borderWidth: '2px'}}>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
