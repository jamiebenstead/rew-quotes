import { useState } from "react";
import "./App.css";
import { quotes } from "./quotes";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div className="outer-container">
      <header className="title-container">
        <h1 className="title">
          Andrew, CEO of GoGo Empires
          <br />
          <span className="subtitle">Quote Generator</span>
        </h1>
      </header>

      <main className="app-container">
        <div className="quote-card">
          <h2 className="quote">{quotes[currentIndex]}</h2>
          <button className="refresh-button" onClick={getNextQuote}>
            Refresh
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
