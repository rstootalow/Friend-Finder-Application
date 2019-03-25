// dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// establish application
const app = express();
const PORT = process.env.PORT || 3000;

// make css files public
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());

// set up express to handle data parsing
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());




//adding aaplication routes to root server file
require(path.join(__dirname, "routing/apiRoutes"))(app);
require(path.join(__dirname, "routing/htmlRoutes"))(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });