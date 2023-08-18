
const express = require('express');
// const Aave = require("./api/routes/aave.js");
const Aave = require("./api/aave")
// const router = express.Router();
const app = express();

// Routes
app.use("/", Aave);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

