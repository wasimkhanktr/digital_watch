// Navbar.js
import React from 'react';
import './Navbar.css';

import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Navbar() {
  return (
    <div className='nav' >
      <ul>
        <li>
          <a href="#">
          <HomeIcon />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
          <InstagramIcon /> 
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#">
          <EmailIcon />
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="#">
          <FacebookIcon /> 
            <span>Facebook</span>
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
          <AccountCircleIcon /> 
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
          <GitHubIcon /> 
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="#">
    
    <WhatsAppIcon /> 
            <span>WhatsApp</span>
          </a>
        </li>
        <li>
          <a href="#">
          <SettingsIcon /> 
            <span>Settings</span>
          </a>
        </li>
      </ul>


      
    </div>
  );
}

export default Navbar;
