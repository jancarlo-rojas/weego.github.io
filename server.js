import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import yahooFinance from "yahoo-finance2";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// OpenAI Chat API endpoint
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: message }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API Error:", errorText);
      return res.status(response.status).send(errorText);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).send("An error occurred while processing your request.");
  }
});

// Yahoo Finance API endpoint
app.get("/api/stock/:symbol", async (req, res) => {
  const { symbol } = req.params;
  try {
    const stockData = await yahooFinance.historical(symbol, {
      period1: "2023-01-01",
      period2: "2023-12-31",
    });
    res.json(stockData);
  } catch (error) {
    console.error("Yahoo Finance API Error:", error.message);
    res.status(500).send("An error occurred while fetching stock data.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("OpenAI API Key:", process.env.OPENAI_API_KEY); // Debugging purposes
});
