
import { Link } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

import { SidebarData } from './SlidebarData';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { IconButton } from '@mui/material';
import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
// import "./sidebar.css";
// import logo1 from
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{ color: "black", size: "25px" }}>

        <div className="navbar1">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            
          </ul>
          
        </nav>

      </IconContext.Provider>

      <div>

        <nav className="navbar">
          <div className="logo-container">



          </div>
          <ul className="navbar-nav">
            {/* <li className="nav-item">
          <Link to="/about" className="nav-link">
          <LiveHelpIcon/>
            About
          </Link>
        </li> */}
            {/* <li className="nav-item">
          <Link to="/cart" className="nav-link">
          <ShoppingCartIcon/>
          STUDENT PROFILES</Link>
        </li> */}
            {/* <li className="nav-item">
          <Link to="/cart" className="nav-link">
          <ShoppingCartIcon/>
          COURSES</Link>
        </li> */}
            {/* <li className="nav-item">
          <Link to="/myaccount" className="nav-link">
         GRADING</Link>
          <AccountCircleIcon/>
        </li> */}
            <li className="nav-item">
              <Link to="/home" className="nav-link">

                HOME</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/about" className="nav-link">

                ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/terms" className="nav-link">

                TERMS AND CONDITIONS</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                ANY QUERIES?</Link>
              
              </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                LogOut</Link>
              <HomeIcon />

            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
