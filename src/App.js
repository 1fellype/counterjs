import React, {useState} from 'react';
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        <div>
          <h1>Contador</h1>
          <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Zerar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
