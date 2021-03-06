const express = require("express");
const path = require("path");
const fs = require("fs");

// ========== ROUTES ==========

// export modules to application
module.exports = function(app) {
    // GET REQUEST TO THE SURVEY PAGE
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    //DEFAULT route that redirects to the home page. 
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

};