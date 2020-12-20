import React, { useState } from 'react';

const Display = () => {
  const colorsArray = ['black', 'red', 'green', 'yellow'];
  const [bgColor, setBgColor] = useState('teal');

  const handleClick = (e) => {
    e.preventDefault();
    let randomIndex = Math.floor(Math.random() * colorsArray.length);
    setBgColor(colorsArray[randomIndex]);
  };

  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: `${bgColor}`, width: '100vw', height: '100vh' }}
    ></div>
  );
};

export default Display;
