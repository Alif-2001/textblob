var Sentiment = require('sentiment');

exports.analyze = (req, res) => {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(req.body.input);
    res.send(result);
}
