'use client';
import React, { useState } from 'react'

const ToggleButton = ({}) => {
    const [click, isClicked] =useState(false)
    return(
        <div>
            <button onClick={()=> isClicked(!click)}>
            {click ? 'Clicked' : 'Click again'}
            </button>
        </div>
    )
}

export default ToggleButton