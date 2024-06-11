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
        <button onClick={handleClick}>
          <img
            className="coin-image"
            src="https://i.postimg.cc/5NbYNHhq/boobs.jpg"
            alt="Click to increment counter"
          />
        </button> {/* Исправленный закрывающий тег */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
