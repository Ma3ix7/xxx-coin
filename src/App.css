import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Загружаем сохраненное значение count из localStorage при инициализации состояния
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    // Сохраняем значение count в localStorage при его изменении
    localStorage.setItem("count", count);
  }, [count]); // Зависимость от переменной count, чтобы эффект срабатывал при её изменении

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h2 className="title">XXX Coin</h2>
      <p className="count-click">{count}</p>
      <div className="coin-btn">
        <a className="" onClick={handleClick}>
          <img
            className="img-boobs"
            src="https://i.postimg.cc/5NbYNHhq/boobs.jpg"
            alt="boobs"
          />
        </a>
        <speacer>
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
        </speacer>
      </div>
    </div>
  );
}

export default App;
