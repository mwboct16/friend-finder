var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// requiring the routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.use(express.static("app/public"));

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
