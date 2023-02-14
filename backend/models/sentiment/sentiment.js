const mongoose = require("mongoose");

const SentimentModel = mongoose.model('Sentiment', {
    content : {
        type: String,
        required: true
    }
})

module.exports = {SentimentModel};
