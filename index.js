const express = require("express")

const app = express();

const cors = require("cors")

const port = process.env.PORT || 5000;

const recipes = require("./data/data.json");

app.use(cors());

app.get('/', (req, res) => {
    res.send("Foodian Chef And Food Is Running !!!")
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.listen(port, () => {
    console.log(`Foodian Chef is running at port: ${port}`);
})