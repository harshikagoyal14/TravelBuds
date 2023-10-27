import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import "../App.css";
import Navbar from './Navbar';
import Card from './Card';
import ProfileModal from './ProfileModal';
import { Button } from "@chakra-ui/button";
import { useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { Avatar, Toast } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

const LeftDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Load user data from local storage when the component mounts
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, []);

    const logoutHandler = () => {
        // Remove user data from local storage
        localStorage.removeItem("userInfo");
        navigate("/");
    };

    return (
        <div>
            <div className='navbar_div'>
                <Navbar />
            </div>

            <div>
                
                <Menu>
                    <MenuButton as={Button} bg="black" rightIcon={<ChevronDownIcon bg="white" />}>
                        <Avatar
                            size="sm"
                            cursor="pointer"
                            name={user ? user.name : ''}
                            src={user ? user.pic : ''}
                        />
                    </MenuButton>
                    <MenuList>
                        <ProfileModal user={user}>
                            <MenuItem>My Profile</MenuItem>
                        </ProfileModal>
                        <MenuDivider />
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </div>

            <div className='left-dashboard'></div>
            <div className='card-container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default LeftDashboard;