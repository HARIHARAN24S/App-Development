import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './pages/Create';
import Home from './pages/Home';
import Dashboard from './pages/dashboard';
import Terms from './terms/Terms';
import PrivacyPolicy from './policies/PrivacyPolicy';
import Contact from "./contact/Contact";
import Story from './Story';
import ImageGallery from './ShortStory';
import Dbstats from './pages/dashboardf/dbstats';
import Dbuserdetails from './pages/dashboardf/dbuserdetails';
import Dboverview from './pages/dashboardf/dboverview';
import Dbadmins from './pages/dashboardf/dbadmins';
import Admin from './pages/adminlogin';
import Queries from './pages/Queries';
import FAQ from './Fa';
function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/Create" element={<Create />} />
    <Route exact path="/dash" element={<Dashboard/>}/>
    <Route exact path="/terms" element={<Terms/>} />
    <Route exact path="/policies" element={<PrivacyPolicy/>} />
    <Route exact path="/contact" element={<Contact/>} />
    <Route exact path="/lifestyle" element={<Story/>} />
    <Route exact path="/shortstory" element={<ImageGallery/>} />
    <Route exact path='/FAQ' element={<FAQ/>} />
    <Route exact path="/dbstats" element={<Dbstats/>}/> 
    <Route exact path="/dbuser" element={<Dbuserdetails/>}/> 
    <Route exact path="/dbover" element={<Dboverview/>}/> 
    <Route exact path="/dbadmins" element={<Dbadmins/>}/>     
    <Route exact path="/admin" element={<Admin/>}/> 
    <Route exact path="/queries" element={<Queries/>}/> 
    </Routes>
    </Router>
    </div>
  );
  }
export default App;
