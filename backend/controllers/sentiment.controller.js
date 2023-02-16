var Sentiment = require('sentiment');
const {SentimentModel} = require("../models/sentiment/sentiment");

exports.analyze = (req, res, next) => {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(req.body.input);

    const sentimentItem = new SentimentModel({
        content: req.body.input,
    })

    sentimentItem
        .save()
        .then((result) => {
            console.log("Saved input to DB", result);
        })
        .catch((error) => {
            console.log("Error saving the input", error);
        })

    res.send(result);
    next();
}

exports.history = (req, res) => {
    SentimentModel
        .find()
        .sort({$natural:-1})
        .limit(req.headers.count)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log("Error fetching Data", err);
            res.sendStatus(404);
        })
}