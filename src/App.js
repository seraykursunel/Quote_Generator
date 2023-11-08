import "./styles.css";
import { useState, useEffect } from "react";

const url = "https://type.fit/api/quotes";

export default function App() {
  const [quote, setQuote] = useState([]);

  const getQuote = async () => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)

    setQuote(data[Math.floor(Math.random() * data.length)]);
  };

  handleClick = () => {
    getQuote();
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <button onClick={handleClick}>New Quote 🕵️‍♀️</button>
      <h3>{quote?.text}</h3>
      <h4>
        <i>{quote?.author}</i>
      </h4>
    </div>
  );
}
