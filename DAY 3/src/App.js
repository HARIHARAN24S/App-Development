import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Create';
import Login from './Login';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/Create" element={<Create />} />
    </Routes>
    </Router>
    
    </div>
  );
  }
export default App;