const PORT = 8000;

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require('fs')
const multer = require('multer')
const {Configuration, OpenAIApi} = require("openai");
const API_KEY_GPT = process.env.API_KEY_GPT;
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const app = express();

app.use(express.json());
app.use(cors());

//------------------------------------------------//
//AiGPT
//------------------------------------------------//

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY_GPT}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: req.body.message}],
      max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

//------------------------------------------------//
//AI DALLE
//------------------------------------------------//



app.post('/images', async (req, res) => {

  try {
      const response = await openai.createImage({
          prompt: req.body.message,
          n: 4,
          size: "512x512",
      })
      console.log(response.data.data)
      res.send(response.data.data)
  } catch (error) {
      console.error(error)
  }
})


app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
