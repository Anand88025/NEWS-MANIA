// server.js
const express = require('express');
const openai = require('openai');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configure your OpenAI API key
openai.apiKey = process.env.OPENAI_API_KEY;

app.post('/generate-image', async (req, res) => {
    const { headline } = req.body;

    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: headline,
            size: "1024x1024",
            quality: "standard",
            n: 1,
        });
        const imageUrl = response.data[0].url;
        res.json({ imageUrl });
    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).send("Error generating image");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
