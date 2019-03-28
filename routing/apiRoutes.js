const express = require("express");
const path = require("path");
const fs = require("fs");


// ========== IMPORT FRieNDS DATA
var friend_data = require("../app/data/friends.js");

//========== ROUTES ==========

//EXPORT THE API ROUTES FROM OTHER FILES
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // ========== POST NEW USER FROM SURVEY ==========
    app.post("/api/friends", function(req, res) {
        //user object where data will be stored
        var userData = req.body
        // user scores to compare to existing friends in database
        var userScores = userData.scores;

        //object to store best match
        var compatibleMatch = {
            name: "",
            photo: "",
            diffScore: 100
        };

        //set total diff to zero and add user scores to it through the loop
        var totalDiff = 0;

        //loop through all friends in database 
        for (var i = 0; i < friend_data.length; i++) {
            console.log(friend_data[i].name);
            totalDiff = 0;

            for (var j = 0; j <friend_data[i].score[j]; j++) {
                totalDiff += Math.abs(parseInt(userScores[j] - parseInt(friend_data[i].score[j])));

                if (totalDiff <= compatibleMatch.diffScore) {
                    compatibleMatch.name = friend_data[i].name,
                    compatibleMatch.photo = friend_data[i].photo,
                    compatibleMatch.diffScore = totalDiff;
                }
            }
        }
        //push data back in to userData object
        friend_data.push(userData);
        //then return a json object with the most compatible match
        res.json(compatibleMatch);

    });
};


