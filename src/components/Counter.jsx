import React, { useState } from 'react';
import IncrementButton from './IncrementButton.jsx';
import DecrementButton from './DecrementButton.jsx';
import ResetButton from './ResetButton.jsx';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2 style={{ fontSize: '48px', color: '#333' }}>{count}</h2>
      <IncrementButton onClick={increment} />
      <DecrementButton onClick={decrement} />
      <ResetButton onClick={reset} />
    </div>
  );
}

export default Counter;