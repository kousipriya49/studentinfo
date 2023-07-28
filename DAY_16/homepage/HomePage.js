import React from 'react';
import { Link } from 'react-router-dom';
import Homepgnavbar from './homepgnavbar';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div>
 <Homepgnavbar/>
    <div className="containerhomepg">
      <div className='homepg'>
      <div class="btn1-groups">
       <Link to="/login">
	  <div class="btn1-red-tr">Login As Student</div>
   </Link>
   <Link to ="/login">
		<div class="btn1-green-tr">Login As Admin </div> 
   </Link>
   <Link to="/register">
    <div class="btn1-blue-tr">Register</div>
   </Link>

    
    
     </div>
    </div>
    </div>
   </div>
  );
};

export default HomePage;
