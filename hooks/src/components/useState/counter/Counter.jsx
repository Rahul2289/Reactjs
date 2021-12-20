import React, { useState } from "react";
import "./counter.css";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <div className="counter-container">
        <div onClick={decrementCount} className="decrement-count">
          <MinusOutlined className="minus" />
        </div>
        <div className="count">
          <span>{count}</span>
        </div>
        <div onClick={incrementCount} className="increment-count">
          <PlusOutlined className="plus" />
        </div>
      </div>
      <div className="reset-container">
        <button onClick={reset} className="btn-grad ">
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
