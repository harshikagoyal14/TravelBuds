import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Features from './components/Features';
import Login from './components/LoginPage';
import Signup from './components/SignupPage';

function App() {
  return (


    <>
    
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path ="/login" element={<Login/>} />
        <Route path ="/signup" element={<Signup/>} />

      </Routes>
      </>
     
  );
}

export default App;

