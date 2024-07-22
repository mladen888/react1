'use client';
import React, { useState } from 'react'

const ToggleText = ({}) => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
    <button onClick={() => setIsVisible(!isVisible)}>ToggleText</button>
    {isVisible && (
      <div>
        <p>Porukaa.</p>
      </div>
    )}
  </div>
  );
};

export default ToggleText