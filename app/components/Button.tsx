"use client"

// function Button() {
//     return <button className="py-2 px-8  rounded-md bg-blue-400">Click me</button>;
//   }
//   export default Button;



import React, { useState } from 'react';

const MyButton = () => {
  const [buttonText, setButtonText] = useState('Click me');

  const handleClick = () => {
    // Your event handling logic here
    // console.log('Button clicked!');
    alert("Are you sure you want to see protfolio?");
    // You can also update the component's state
    setButtonText('Clicked!');
  };

  return (
    <button onClick={handleClick} className="py-2 px-8  rounded-md bg-blue-400">
      {buttonText}
    </button>
  );
};
export default MyButton