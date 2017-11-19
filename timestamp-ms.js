var express = require("express")
var strf = require("strftime")

var app = express()
app.listen(5000)

app.get("/:unix(\\d+)", timestamper)
app.get("/:utc", timestamper)

function timestamper(req, res) {
    var time;
    if (typeof(req.params.unix) == "string") {
        time = new Date(Number(req.params.unix))
    } else {
        time = new Date(req.params.utc)
    }
    var timestamp = {
        "unix": time.getTime(),
        "natural": strf("%B %d, %Y", time)
    }
    res.end(JSON.stringify(timestamp))
}