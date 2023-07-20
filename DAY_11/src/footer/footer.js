import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>contact:9876543210</p>
        <pre>
        <p>Address:7A chaiman thulasi raman 2nd street ,
          new Mahalipatti Road,
          Madurai.
        </p>
          </pre>
      </div>
    </footer>
  );
};

export default Footer;
