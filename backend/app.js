const express = require("express");
const cors = require("cors");
const app = express();
var router = require('express').Router();
const printrequest = require('./middleware/printrequest.js');
const sentiment = require('./controllers/sentiment.controller');

app.use(cors());
app.use(express.json());

// Print user request
router.use((req, res, next) => {
    printrequest.print(req, res, next)
})

router.get("/", (req, res, next) => {
    res.send('Hello World!')
})

router.post("/sentiment", sentiment.analyze);

app.use('/api', router);

module.exports = app;