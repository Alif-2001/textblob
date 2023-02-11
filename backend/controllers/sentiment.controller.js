var Sentiment = require('sentiment');

exports.analyze = (req, res, next) => {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(req.body.input);
    res.send(result);
    next();
}
