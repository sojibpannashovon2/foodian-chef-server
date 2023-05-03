const express = require("express")

const app = express();

const cors = require("cors")

const port = process.env.PORT || 6000;


app.use(cors());

app.get('/', (req, res) => {
    res.send("Foodian Chef And Food Is Running !!!")
})

app.listen(port, () => {
    console.log(`Foodian Chef is running at port: ${port}`);
})