
const express = require('express');
// const Aave = require("./api/routes/aave.js");
const Aave = require("./api/aave")
// const router = express.Router();
const app = express();

// CORS Headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes
app.use("/", Aave);

// Default route
app.get('/', (req, res) => {
    res.send('Anant Gauranshi deployed it 🥳');
});

// Error handling for 404
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

