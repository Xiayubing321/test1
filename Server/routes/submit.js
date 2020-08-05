//import express
var express = require('express');
var router = express.Router();
//mongoose
var mongoose = require('mongoose');

var Candidates = mongoose.Schema({
    "id":Number,
    "name":String,
    "gender":String,
    "country":String,
    "university":String,
    "info":String
    },{versionKey: false}//不会出现多余的"_v"列
);

var Candidates_model = mongoose.model('Candidates', Candidates);

var countResult;

getNumber(function(){
    return 0;
});

router.get('/', function(req, res, next) {
    countResult += 1;
    //console.log(countResult.c);
    var inputCount = countResult;
    var inputName = "'" + req.query.name + "'";
    var inputGender = "'" + req.query.gender + "'";
    var inputCountry = "'" + req.query.country + "'";
    var inputUniversity = "'" + req.query.university + "'";
    var inputInfo = "'" + req.query.info + "'";
    runInsert(inputCount, inputName, inputGender, inputCountry, inputUniversity, inputInfo ,function() {
        res.send("success!");
    })
})

function runInsert(inCount, inName, inGender, inCountry, inUni, inInfo, callback) {
    var candidate=new Candidates_model({
        "id":inCount,
        "name":inName,
        "gender":inGender,
        "country":inCountry,
        "university":inUni,
        "info":inInfo
    })

    candidate.save();
    callback();
}

function getNumber(callback){
    Candidates_model.countDocuments({},function(error,count){
        if(error) throw error;
        if(count) {
            //console.log(count);
            countResult = count;
        }
    })
    callback();
}

module.exports = router;