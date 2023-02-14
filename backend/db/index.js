const mongoose = require('mongoose');

exports.connect = (app) => {
    const connect = () => {
        mongoose.Promise = global.Promise;
        mongoose.set('strictQuery', false);
        mongoose
            .connect("mongodb://user:pass@localhost:27017/?authMechanism=DEFAULT")
            .then(() => {
                console.log("Connected to DB");
                app.emit("ready");
            })
            .catch((err) => {
                console.log("Could not connect to DB", err);
                setTimeout(connect, 2000);
            });
    };
    connect();
}
