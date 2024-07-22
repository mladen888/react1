'use client';
import React, { useState } from 'react';

const FormValidation = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (email === '' || password === '') {
      setError('Email and password fields cannot be empty!');
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input style={{color: 'black'}} type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        <input style={{color: 'black'}} type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
      {error && <h3>{error}</h3>}
      {success && <h3>Form submitted successfully!</h3>}
    </div>
  );
};

export default FormValidation;