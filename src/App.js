import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h2 className="title">XXX Coin</h2>
      <p className="count-click">{count}</p>
      <div className="coin-btn">
        <button className="coin-button" onClick={handleClick}>
          <img
            src="https://i.postimg.cc/5NbYNHhq/boobs.jpg"
            alt="Click me"
            className="img-boobs"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
