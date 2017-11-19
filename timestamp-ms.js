var express = require("express")

var app = express()
app.listen(5000)

app.get("/\\d+:unix", timestamper)
app.get("/*:utc", timestamper)

function timestamper(req, res) {
    console.log(req.params.unix)
    console.log(req.params.utc)
    if (typeof(req.params.unix) == "string") {
        console.log("got here")
        time = new Date(Number(req.params.time))
    } else {
        time = new Date(req.params.time)
    }
     
    console.log(time)
    var timestamp = {
        "unix": time.getTime(),
        "natural":
            time.getUTCMonth() +
            " " +
            time.getDate() +
            ", " +
            time.getFullYear()
    }
    res.end(JSON.stringify(timestamp))
}