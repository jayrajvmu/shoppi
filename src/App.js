import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Des from './Des';
import Navbar from './Nav';
import Form from './Form';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/des" element={<Des />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/login" element={<Login />}/>

    </Routes>
  </Router>
    </div>
  );
}

export default App;
