import React from 'react';

function ResetButton({ onClick }) {
  return (
    <button onClick={onClick} style={buttonStyle}>Reset</button>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#2196F3',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

export default ResetButton;

