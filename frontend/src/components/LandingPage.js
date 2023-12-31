import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';
import Features from './Features';
import ContactUs from './contactUs/ContactUs';
import HomePageImg from '../images/home-page-img.svg';
import '../App.css';

const clientId = "1086908533986-00i42d0mn3a1mkqbdtq2l31kk6dap8pj.apps.googleusercontent.com";

const LandingPage = () => {

  return (
    <div className="landing">

      <div className='navbar_div'>
      <Navbar/>
      </div>
      
      <div className="landing-content">
        <div className="landing-left">
          <h1>Ride <span className='red' >Smart</span></h1>
          <h1> Save <span className='big'>BIG</span></h1>
          <h1>Choose <br/><span className='travel-bud'>TravelBud</span></h1>
          <div className="landing-buttons">
            <Link to="/login" className="login-button1">LOG IN</Link>
            <Link to="/signup" className="signup-button1">SIGN UP</Link>
          
          </div>
        </div>
        <div className="landing-right">
          <img className ='home-page-img' src= {HomePageImg} alt="Carpooling" />
        </div>
      </div>

      <div>
        <Features/>
        <ContactUs/>
      </div>
    </div>
  );
}

export default LandingPage;