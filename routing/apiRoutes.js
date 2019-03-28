const express = require("express");
const path = require("path");
const fs = require("fs");


// ========== IMPORT FRieNDS DATA
var friend_data = require("../app/data/friends.js");

//========== ROUTES ==========

//EXPORT THE API ROUTES FROM OTHER FILES
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friend_data);
    });

    // ========== POST NEW USER FROM SURVEY ==========
    app.post("/api/friends", function(req, res) {
        //user object where data will be stored
        var userData = req.body
        // user scores to compare to existing friends in database
        var userScores = userData.scores;

        //object to store best match
       var matchName = "";
       var matchImage = "";
       //set total diff to zero and add user scores to it through the loop
        var totalDiff = 100;

        //loop through all friends in database 
        for (var i = 0; i < friend_data.length; i++) {
            // console.log(friend_data[i].name);
            var diff = 0;

            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(parseInt(userScores[j] - parseInt(friend_data[i].scores[j])));

                if (diff < totalDiff) {
                    totalDiff = diff;
                    matchName= friend_data[i].name;
                    matchImage = friend_data[i].photo;
                }
            }
        }
        //push data back in to userData object
        friend_data.push(userData);
        //then return a json object with the most compatible match
        res.json({matchName: matchName, matchImage: matchImage});

    });
};


