// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import FileIcon from '@mui/icons-material/Description';
import GameIcon from '@mui/icons-material/SportsEsports';
import BookIcon from '@mui/icons-material/MenuBook';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';


const Navbar = () => {
 

  

  return (
    <div className="nav">
      
      <ul>
        <li>
          <a href="#">
            <HomeIcon />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ImageIcon />
            <span>Images</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FileIcon />
            <span>Files</span>
          </a>
        </li>
        <li>
          <a href="#">
            <GameIcon />
            <span>Games</span>
          </a>
        </li>
        <li>
          <a href="#">
            <BookIcon />
            <span>Books</span>
          </a>
        </li>
        <li>
          <a href="#">
            <NotificationsIcon />
            <span>Notifications</span>
          </a>
        </li>
        <li>
          <a href="#">
            <SettingsIcon />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <PersonIcon />
            <span>Profile</span>
          </a>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
