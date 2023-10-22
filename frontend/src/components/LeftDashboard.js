import React from 'react';
import SearchBar from './SearchBar';
import "../App.css";
import Navbar from './Navbar';
import Card from './Card';
const LeftDashboard = () => {
    return (
        <div>
            
           <div className='navbar_div'>
             <Navbar/>
            </div>
            <div className='left-dashboard'></div>
            <div className='card-container'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </div>
            
        </div>
       
    );
}

export default LeftDashboard;