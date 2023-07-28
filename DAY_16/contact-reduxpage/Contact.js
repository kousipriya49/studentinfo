import React ,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import './Contact.css';
import axios from "axios";

const Form = () => {

  
  const { name, contactNumber, email, message } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [notificationMessage, setNotificationMessage] = useState('');


  const handleNameChange = (e) => {
    dispatch({ type: 'UPDATE_NAME', payload: e.target.value });
  };

  const handleContactNumberChange = (e) => {
    dispatch({ type: 'UPDATE_CONTACT_NUMBER', payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value });
  };

  const handleMessageChange = (e) => {
    dispatch({ type: 'UPDATE_MESSAGE', payload: e.target.value });
  };

  const handleSubmit =  () => {
    try {
      const formData = { name, contactNumber, email, message };
     axios.post('http://127.0.0.1:8080/post11', formData);
      setNotificationMessage('Message Sent Successfully');
      setTimeout(() => {
        setNotificationMessage('');
      }, 2000);
    } catch (error) {
      console.error(error);
      setNotificationMessage('Failed to send message');
      setTimeout(() => {
        setNotificationMessage('');
      }, 2000);
    }
  };

  return (
    <div className='back'>
      <div className="arch_contact_us_duplicate">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
              <p className="text-blk section-head">
                <b>Any Queries?</b>
              </p>
              <p className="text-blk section-subhead"></p>
            </div>
            <div className="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
              <div className="form-wrapper">
                <input className="input input-element" name="Name" placeholder="Name" value={name} onChange={handleNameChange} />
                <input className="input input-element" name="Contact Number" placeholder="Contact Number" value={contactNumber} onChange={handleContactNumberChange} />
                <input className="input input-element" name="Email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <textarea className="textinput input-element" placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
                <button className="logb1" onClick={handleSubmit}>SEND</button>

                {notificationMessage && (
                  <div className="notification-popup">
                    <p>{notificationMessage}</p>
                  </div>
                )}
          
              </div>
              <div className="social-media-icon-container">
                {/* Social media icons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;