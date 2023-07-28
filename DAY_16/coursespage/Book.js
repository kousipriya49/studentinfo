import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { reserveTable } from '../store';
import './book.css';
import Navbar from '../navbar/Navbar';
const BookingPage = () => {
  const dispatch = useDispatch();
  const [firstname, setfName] = useState('');
  const [lastname, setlName] = useState('');
  // const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [college, setCollege] = useState('');

 

 
    const handleSubmit = (e) => {
      const data1 =
      {
     
        firstname:firstname,
        lastname:lastname,
        email:email,
        address:address,
        phoneno:phoneno,
        college:college,
       
      };
      axios.post('http://localhost:8080/post',data1);
      alert("REGISTERED")
    }
  

  return (
 
     
      <div className='back'>
      <marquee behavior='alternate' direction='right'>
        <h1>
          REGISTER HERE 
        </h1>
      </marquee>
    <div className='bod9'>
      <br></br>  
<p>STUDENTS MUST REGISTER FOR ATTENDING</p>
    <form className="reservation-form">
      <div className='clr'>
  
      <div className="form-group">
      <label >FirstName :-</label>
        <input
          type="text"
          id="name"
          value={firstname}
          placeholder='First Name'
          onChange={(e) => setfName(e.target.value)}
          required
        />
        
      </div>
      <div className="form-group">
        <label >LastName </label>
        <input
          type="text"
          id="lastname"
          placeholder='LastName'
          value={lastname}
          onChange={(e) => setlName(e.target.value)}
          required
        />
      </div>
      
      
      <div className="form-group">
        <label >Email<br/></label>
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label ><br/>Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
         
         
        />
      </div>
    

      <div className="form-group">
        <label ><br/>Phoneno</label>
        <input
          type="number"
          id="phoneno"
          value={phoneno}
          onChange={(e) => setPhoneno(parseInt(e.target.value))}
         
         
        />
      </div>
      <div className="form-group">
        <label >COLLEGE </label>
        <input
          type="text"
          id="college"
          placeholder='college'
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />
      </div>
      <br></br><br></br><br></br>
      <div class="tacbox">
  <input id="checkbox" type="checkbox" />
  <label for="checkbox"> I agree to these <Link to="/terms">Terms and Conditions</Link>.</label>
</div>
      <div className="form-group">
        <button type="submit"  onClick={handleSubmit}>Register</button>
      </div>
      </div>
    </form>
  {/* <br/><br/><br/><br/><br/><br/><br/> */}
    </div>
    </div>
  
  );
  };

export default BookingPage;

  


