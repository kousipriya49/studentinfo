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
import reportWebVitals from './reportWebVitals';
import TermsAndConditionsPage from './termsandconditionspage/termsandconditions';
import  store  from './contact-reduxpage/store';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route ,Switch} from 'react-router-dom';
import HomePage from './homepage/HomePage';
import LoginPage from './loginand registrationpage/LoginPage';
import RegistrationPage from './loginand registrationpage/RegistrationPage';
import Navbar from './navbar/Navbar';
import Navbar1 from './navbar/sidebar';
import HomePage1 from './homepage/HomePage1';
import About from './aboutpage/About';
import Footer from './footer/footer';
import MediaCard from './coursespage/card';
import StudentProfile from './studentprofilepage/studentprofile';
import Course from './coursespage/courseregister';
import AppMain from './studentgrade page/studentgrademain';
import Contact from './contact-reduxpage/Contact';
import StudentSupportService from './studentsupport page/studentsupport';
import { Provider } from 'react-redux';
// import Footer from './Footer';
import Navbar2 from './feesmanagement/Navbar';
import Home from './feesmanagement/Home';
import AddProduct from './feesmanagement/AddProduct';
import EditProduct from './feesmanagement/EditProduct';
import './index.css';
import './App.css';
import './feesmanagement/add.css';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
      
        <HomePage />} />
        <Route path="/course" element={<MediaCard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/courseregister" element={<Course/>} />
        <Route path="/return" element={
        <>
        <Navbar2/>
    

        <Home/>
        
        </>} />
        <Route exact path="/" element={<>
          <Navbar2/>
        <Home/>
        </>} />
        <Route path="/editProduct/:id" element={<EditProduct/>} />
     
        <Route path='/fees' element={
        <>
        <Navbar2/>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Home />
       
        </>
        }></Route>
        <Route path='/addProduct' element={<>
        <Navbar2/>
        <AddProduct />
        <Footer/>
        </>}></Route>
        {/* <Route path='
        /editProduct/:id' element={<UpdateProductComponent />}></Route> */}
        <Route path="/contact" element={
         <>
         <Navbar/>
         <br></br><br></br><br></br> <br></br>
        
         <Contact/>
         <Footer/>
         </>} />

        <Route path="/grading" element={
        <>
        <Navbar/>
        <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br>
        <br></br><br></br><br></br> 
        <AppMain/>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <Footer/>
        </>
        } />
        <Route path="/about" element={
        <>
        <Navbar/>
<br></br>
<br></br>
<br></br>
<br></br>
        <About />
        </>} /> 
        
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              
              <br></br>  <br></br>  <br></br>  <br></br>   
              <HomePage1 />
              <br></br>
              <br></br>
              <br></br>
              <br></br>  <br></br>  <br></br>  <br></br>   
              <br></br>
              <br></br>
              <Footer />
            </>
          }
        />
          <Route
          path="/service"
          element={
            <>
              <Navbar />
             
              <StudentSupportService />
              <br></br>
              <br></br>
              <br></br>
              <Footer />
            </>
          }
        />
         <Route path="/terms" element={
         <>
         <Navbar />
         <TermsAndConditionsPage />
       <Footer/>
       </>} /> 
       <Route path="/profile" element={
          <>
        <Navbar/>
        <StudentProfile />
        <Footer/>
        </>} /> 
      </Routes>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />,
    </Provider>,
  </BrowserRouter>,
  document.getElementById('root')
  );
  reportWebVitals()
