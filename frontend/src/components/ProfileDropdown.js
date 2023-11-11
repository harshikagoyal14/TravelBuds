import React, {useState, useEffect, useRef} from 'react';
import user from '../images/user.png';
import logout from '../images/log-out.png';
import '../App.css';
import {Link, useNavigate} from 'react-router-dom';


function  Dropdown() {
       
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = () =>{
      console.warn("Logged Out");
      localStorage.clear();
      navigate('/signup');
    }


    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });

    return (
      <div className="Dropdown">
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={user}></img>
          </div>
  
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
           
            <ul>
              <li><button className='profile-btn'>My Profile</button></li>
              <li><Link   className='logout-btn' onClick={logout} to ='/signup'>Logout</Link></li> 
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  function DropdownItem(props){
 

    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }
  
  export default Dropdown;