import React from 'react';

function IncrementButton({ onClick }) {
  return (
    <button onClick={onClick} style={buttonStyle}>
      ➕ Increment
    </button>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

export default IncrementButton;