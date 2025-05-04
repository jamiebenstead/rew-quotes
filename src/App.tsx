import { useState } from "react";
import "./App.css";
import { quotes } from "./quotes";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="outer-container">
      <header className="title-container">
        <h1 className="title">Andrew, CEO of GoGo Empires</h1>
        <h2 className="subtitle">Quote Generator</h2>
      </header>

      <main className="app-container">
        <div className="quote-card">
          <h2 className="quote">{quotes[currentIndex]}</h2>
          <button className="refresh-button" onClick={getNextQuote}>
            Next Quote
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
