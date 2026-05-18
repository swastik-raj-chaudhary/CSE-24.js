import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // Step 6: Event handlers
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <>
    <div 
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: "40px",
        width: "350px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2>React Counter Application</h2>

      {/* Step 4: Display Counter Value */}
      <h1>{count}</h1>

      {/* Buttons */}
      <div>
        <button
          onClick={increment}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Increment (+)
        </button>

        <button
          onClick={decrement}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Decrement (-)
        </button>
      </div>

      <button
        onClick={reset}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Reset
      </button>
    </div>
    </>

  )
}

export default App