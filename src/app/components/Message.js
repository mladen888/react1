'use client';
import React, { useState } from 'react'

const ToggleText = ({}) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div>
          <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Hide content' : 'Show content'}
          </button>
          {isVisible && (
            <div>
              <p>This is the content to show/hide.</p>
            </div>
          )}
        </div>
      );
};

export default ToggleText