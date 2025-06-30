import React from 'react';

function DecrementButton({ onClick }) {
  return (
    <button onClick={onClick} style={buttonStyle}>
      ➖ Decrement
    </button>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

export default DecrementButton;