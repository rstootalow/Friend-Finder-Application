// dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// establish application
const app = express();
const PORT = 3000;

// set up express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// ========== BASIC ROUTES ==========
//home route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

//survey route
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });