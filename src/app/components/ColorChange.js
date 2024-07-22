'use client';
import React, { useState } from 'react';

const ColorChanger = () => {
    const colors = ['red', 'orange', 'yellow'];
    const [color, setColor] = useState(colors[0]); // lose sam postavio useState

    return (
        <div>
            <button onClick={() => {setColor(colors[Math.floor(Math.random() * colors.length)])}}>
                Change Color
            </button>
            <p style={{ color: color }}>This text changes color</p>
        </div>
    );
};

export default ColorChanger;