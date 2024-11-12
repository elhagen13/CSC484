import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";


function App(){
  return (
    <div style={{width: '500px', height: '100vh', borderColor:'black', borderWidth: '2px'}}>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
