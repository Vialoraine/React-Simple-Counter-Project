import "./App.css";
import { React, useState } from "react";

// increase - this will increment the value
// decrease - this will decrement the value
// reset - to reset the counter back to zero.
 
export default function App() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h1>Using React: A Simple Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}