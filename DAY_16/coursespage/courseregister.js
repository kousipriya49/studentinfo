import { Link } from "react-router-dom";
import "./register.css";
import React, { useState } from "react";

export default function Course() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address:"",
    phoneno:"",
    collge:""
  });

  
  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (

    <> 
    <div className="">
   <marquee>
      <h1>course registration form</h1>
    </marquee>
      <p>The students are advised to register before starting the course!</p>
      </div>
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.firstName} {values.lastName}{" "}
            </h3>
            <div> Your registration was successfull! </div>
          </div>
        )}
        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

{!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Address"
            name="address"
            value={values.address}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.address&& (
          <span id="first-name-error">Please enter your address</span>
        )}

        





{!valid && (
          <input
            class="form-field"
            type="long"
            placeholder="phone number"
            name="phoneno"
            value={values.phoneno}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.phoneno&& (
          <span id="first-name-error">Please enter your phoneNumber</span>
        )}
       


       {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="college name"
            name="clgname"
            value={values.clgname}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.phoneno&& (
          <span id="first-name-error">Please enter your college name</span>
        )}
       <div class="tacbox">
  <input id="checkbox" type="checkbox" />
  <label for="checkbox"> I agree to these <Link to="/terms">Terms and Conditions</Link>.</label>
</div>
<Link to="reg">
       <button class="form-field" type="submit">
            Register
          </button>
          </Link> 
      </form>

    </div>
    </>
  );
}
