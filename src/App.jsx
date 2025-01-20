import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar"; // Import Navbar component
import About from "./About"; // Import other pages
import Stock from "./Stock";
import Contact from "./Contact";
import ThreeBackground from "./ThreeBackground"; // Background component
import "./App.css"; // App-specific styles
import "./index.css"; // Global styles
import fetchChatGPTResponse from "./api";
import QuoteGenerator from "./quoteGenerator";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Clear input
    setInput("");

    // Fetch ChatGPT response
    const response = await fetchChatGPTResponse(input);
    if (response) {
      const botMessage = { role: "Assistant", content: response };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <ThreeBackground />
        <Navbar />
        <Routes>
          {/* Home content is directly in App.jsx */}
          
          <Route
            path="/"
            
            element={
    
              <div
             
              div className="main-content">
                <div>
      <QuoteGenerator />
    </div>
               
                

                <div className="chat-window">
                  {messages.map((msg, idx) => (
                    <div key={idx} className="chat-message">
                      <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
                    </div>
                  ))}
                </div>

                <div className="chat-input-container">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSend();
                      }
                    }}
                    placeholder="Type your message"
                    className="chat-input"
                  />
                  <button className="send-button" onClick={handleSend}>
                    Send
                  </button>
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
