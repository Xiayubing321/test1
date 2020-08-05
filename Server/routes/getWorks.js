//import express
var express = require('express');
var router = express.Router();
var result;
//mongoose
var mongoose = require('mongoose');

var Works = mongoose.Schema({
    "id":Number,
    "type":String,
    "subject":String,
    "title":String,
    "content":String
});
var Works_model = mongoose.model('Works', Works);

router.get('/', function (req, res, next) {
    //construct query
    var typeFlag = false;
    var subjectFlag = false;
    var typeStr = "";
    var subjectStr = "";
    //select the patent or paper
    if(req.query.flags[0] == 1){
        typeFlag = true;
        typeStr += "patent";
    }
    if(!typeFlag && req.query.flags[1] == 1){
        typeFlag = true;
        typeStr += "paper";
    }
    //select the subject
    if(req.query.flags[2] == 1){
        subjectFlag = true;
        subjectStr = "artificial";
    }
    if(!subjectFlag && req.query.flags[3] == 1){
        subjectFlag = true;
        subjectStr = "data";
    }
    if(!subjectFlag && req.query.flags[4] == 1){
        subjectFlag = true;
        subjectStr = "math";
    }
    if(!subjectFlag && req.query.flags[5] == 1){
        subjectFlag = true;
        subjectStr = "robo";
    }
    console.log(typeStr);
    console.log(subjectStr);
    
    getWork(typeStr, subjectStr, function () {
        console.log(result);
        res.send(result);
    })
})

var getWork = function (strType, strSubject, callback) {
    //no select
    //console.log("enter a");
    if(strType === "" && strSubject === ""){
        Works_model.find({
            $and: [
                {
                    $or: [
                    {type:'patent'},
                    {type: 'paper'}]
                },
                {
                    $or: [
                    {subject:"artificial"}, 
                    {subject:"data"}, 
                    {subject:"math"},
                    {subject: "robo"}]
                }
            ]
        },
        {_id:0/*去除_id属性*/}, function(error,rows){
            if (error) throw error;
            if (rows) {
                result = rows;
            }
            callback(); 
        });
    }
    //select type & no select sub
    if(strType != "" && strSubject ==="") {
        Works_model.find({
            $and: [
                {
                    $or: [
                    {type: strType},
                    {type: strType}]
                },
                {
                    $or: [
                    {subject:"artificial"}, 
                    {subject:"data"}, 
                    {subject:"math"},
                    {subject: "robo"}]
                }
            ]
        },
        {_id:0/*去除_id属性*/}, function(error,rows){
            if (error) throw error;
            if (rows) {
                result = rows;
            }
            callback(); 
        });
    }
    // no select type * select sub
    if(strType === "" && strSubject != "") {
        Works_model.find({
            $and: [
                {
                    $or: [
                    {type: 'patent'},
                    {type: 'paper'}]
                },
                {
                    $or: [
                    {subject: strSubject}, 
                    {subject: strSubject}, 
                    {subject: strSubject},
                    {subject: strSubject}]
                }
            ]
        },
        {_id:0/*去除_id属性*/}, function(error,rows){
            if (error) throw error;
            if (rows) {
                result = rows;
            }
            callback(); 
        });
    }
    // select type & sub
    if (strType != "" && strSubject != "" ) {
        Works_model.find({
            $and: [
                {
                    $or: [
                    {type: strType},
                    {type: strType}]
                },
                {
                    $or: [
                    {subject: strSubject}, 
                    {subject: strSubject}, 
                    {subject: strSubject},
                    {subject: strSubject}]
                }
            ]
        },
        {_id:0/*去除_id属性*/}, function(error,rows){
            if (error) throw error;
            if (rows) {
                result = rows;
            }
            callback(); 
        });
    }
}

module.exports = router;