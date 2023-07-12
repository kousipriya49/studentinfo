import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
