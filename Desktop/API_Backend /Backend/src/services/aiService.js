const axios = require("axios");
const { GEMINI_API_KEY } = require("../config/envConfig");

exports.askAI = async (question) => {
  try {
    // Note: 'gemini-flash-latest' is the most stable alias in 2026 
    // to avoid 404s from retired versions.
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

    const response = await axios.post(
      url, 
      {
        contents: [
          {
            parts: [{ text: `${question} (Answer in one word only)` }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json" 
        }
      }
    );

    const candidates = response?.data?.candidates;

    if (!candidates || candidates.length === 0 || !candidates[0]?.content?.parts?.[0]?.text) {
      return "Unavailable";
    }

    const text = candidates[0].content.parts[0].text;

   
    const result = text.trim().split(/\s+/)[0].replace(/[^a-zA-Z]/g, "");

    return result || "Unavailable";

  } catch (error) {
    console.error("Gemini AI Error:", error.response?.data || error.message);
    return "Unavailable";
  }
};