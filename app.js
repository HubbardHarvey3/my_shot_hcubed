var express = require("express")
var app = express()

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render('../public/index.ejs')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
