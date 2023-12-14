// NumberDisplay.js

import React, { useState, useEffect } from 'react';
// import './NumberDisplay.css'; // Import your stylesheet for custom styles

const NumberDisplay = ({ number, className, speed=50, increment=1}) => {
  const [displayedNumber, setDisplayedNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedNumber((prevNumber) => {
       // const increment = 2 //Math.ceil(number / 400); // Adjust the increment based on your preference
        const nextNumber = prevNumber + increment;
        return nextNumber >= number ? number : nextNumber;
      });
    }, speed); // Adjust the interval based on your preference

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="number-display">
      <span className={`animated-number ${className}`} >{displayedNumber}</span>
    </div>
  );
};

export default NumberDisplay;
