// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter ,Routes,Route} from 'react-router-dom';
// import HomePage from './HomePage'; // Update the file path here
// import LoginPage from './LoginPage'; // Update the file path here
// import RegistrationPage from './RegistrationPage'; // Update the file path here
// import Navbar from './Navbar';
// import HomePage1 from './HomePage1';
// ReactDOM.render(
//   <BrowserRouter>
//   <Navbar/>
//   <Routes>
//     <Route path="/home" element={<HomePage1/>}/>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/login" element={<LoginPage />} />
//     <Route path="/register" element={<RegistrationPage />} />
//   </Routes>
    
//   </BrowserRouter>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import Navbar from './Navbar';
import Navbar1 from './sidebar';
import HomePage1 from './HomePage1';
import About from './About';
import Footer from './footer';
// import Footer from './Footer';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about" element={<About />} /> 
        <Route
          path="/home"
          element={
            <>
              <Navbar />
             
              <HomePage1 />
              <br></br>
              <br></br>
              <br></br>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>,
  document.getElementById('root')
);
