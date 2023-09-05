import React from 'react';

const Budget = () => {
  const handleClick = async () => {
    const reply = await fetch('http://localhost:3000/clients');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
export default Budget;
