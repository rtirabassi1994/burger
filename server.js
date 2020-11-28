var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();


app.use(express.static("public"));

//Parse the app body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start server
app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});