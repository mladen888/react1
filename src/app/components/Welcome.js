'use client';
import React, { useState } from 'react';

const Welcome = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      {name && <h3>Welcome, {name}!</h3>}
    </div>
  );
};

export default Welcome;
