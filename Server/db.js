var mongoose = require("mongoose"); //引入mongoose
mongoose.connect('mongodb://localhost:3001/main',{ useNewUrlParser: true,useUnifiedTopology: true }); 
//连接到mongodb的main数据库

var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
    console.log("connection error");
});
db.once('open', function callback() { //监听一次打开
    console.log('connected!');
});
 
module.exports = mongoose;