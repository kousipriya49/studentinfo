import React, { useState } from 'react';
import axios from 'axios';
import './feed.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');
    setIsLoading(true);

    try {
      // Form validation
      if (!name.trim() || !email.trim() || !message.trim()) {
        throw new Error('Please fill in all the fields.');
      }

      const data1 = {
        name: name,
        email: email,
        message: message,
      };

      await axios.post('/feedback', data1);
      setIsLoading(false);
      setSuccessMessage('Feedback submitted successfully');
      // Optionally, you can reset the form after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setIsLoading(false);
      setError('Failed to submit feedback. Please try again later.');
      console.error('Error occurred:', error.message);
    }
  };

  return (
    <div className='he1'>
      {}
      <div className='back'>
        <marquee behavior='alternate' direction='right'>
          <h1>GIVE YOUR FEEDBACK HERE</h1>
        </marquee>
        <div className='bod9'>
          {}
          <form className='reservation-form'>
            <div className='clr'>
              <div className='form-group'>
                <label>Name:</label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  placeholder='Your Name'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className='form-group'>
                <label>Email:</label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className='form-group'>
                <label>Message:</label>
                <textarea
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {error && <p className='error-msg'>{error}</p>}
              {successMessage && <p className='success-msg'>{successMessage}</p>}

              <br />
              <br />
              <br />
              <div className='form-group'>
                <button type='submit' onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit Feedback'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
