import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({
    text: "To be the best, You must be able to handle the worst",
    author: "Wilson Kanadi",
  });

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  const getRandomQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="App">

<div className="quote-container">
        <q>{randomQuote?.text}</q>
        <p>{randomQuote?.author ? randomQuote?.author : "Anonymous"}</p>
      </div>



     
      <button className="btn" onClick={getRandomQuote}>
        random quote
      </button>
    </div>
  );
}

export default App;
