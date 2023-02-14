const app = require("./routes")
const db = require("./db")
const port = 3080

db.connect(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})