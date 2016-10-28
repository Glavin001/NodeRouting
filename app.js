var express = require("express");
var app = express();

//chained route handler to minimize redundancy
app.route("/megaHelloWorld")
  .get(function(req,res ) {
    res.send("This was a get request");
  })
  .post(function(req,res) {
    res.send("This was a post request");
  })
  .put(function(req, res) {
    res.send("This was a put request");
  })
  .delete(function(req,res) {
    res.send("This was a delete request");
  });

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
