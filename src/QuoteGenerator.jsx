import React, { useState, useEffect } from "react";
import quotesData from "./quotes.json"; // Import the quotes JSON file

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("dailyQuote"));

    if (savedData && new Date() - new Date(savedData.timestamp) < 24 * 60 * 60 * 1000) {
      // Use the saved quote if it's within 24 hours
      setQuote(savedData.quote);
      setLastFetched(savedData.timestamp);
    } else {
      // Otherwise, fetch a new random quote
      fetchNewQuote();
    }
  }, []);

  const fetchNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
    const newQuote = quotesData.quotes[randomIndex];
    const timestamp = new Date();

    setQuote(newQuote);
    setLastFetched(timestamp);

    // Save the new quote and timestamp in localStorage
    localStorage.setItem(
      "dailyQuote",
      JSON.stringify({ quote: newQuote, timestamp })
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      
      {quote && (
        <>
          <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
            "{quote.quote}"
          </p>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            - {quote.author}
          </p>
        </>
      )}
      
      <p style={{ fontSize: "0.9rem", color: "gray" }}>
        Last fetched: {lastFetched ? new Date(lastFetched).toLocaleString() : "N/A"}
      </p>
    </div>
  );
};

export default QuoteGenerator;
