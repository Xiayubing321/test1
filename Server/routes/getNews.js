//import express
var express = require('express');
var router = express.Router();
var result;
//mongoose
var mongoose = require('mongoose');

var News = mongoose.Schema({
    "id":Number,
    "src":String,
    "href":String,
    "info":String
});
var News_model = mongoose.model('News', News);

router.get('/', function (req, res, next) {
    getNews(function () {
        console.log(result);
        res.send(result);
    })
})

var getNews = function (callback) {
    News_model.find({}, {_id:0}/*去除_id属性*/, function(error,final){
        if (error) throw error;
        if (final) {
            result = final;
        }
        callback(); 
    })
}

module.exports = router;