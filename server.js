const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// OpenAI API key
const configuration = new Configuration({
    apiKey: "YOUR_OPENAI_API_KEY", // Replace with your OpenAI API key
});
const openai = new OpenAIApi(configuration);

// Chatbot endpoint
app.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `You are an Islamic motivational speaker. Answer questions based on Islamic teachings: ${message}`,
            max_tokens: 150,
            temperature: 0.7,
        });

        const botMessag
