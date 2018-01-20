var express =require("express");
var expressStatic=require('express-static');
var app=express();
// 获取cookie-parser 模块，用于实现cookie数据的存储
var cookieParser = require('cookie-parser');
// 获取cookie-session 模块  用于实现sessin数据的存储
var cookieSession = require('cookie-session');

app.set('view engine','ejs')
app.use(cookieParser());

var arr = [];
for(var i=0;i<100000;i++){
	arr.push(Math.random()*i + 'a');
}

app.use(cookieSession({
	keys:arr,
	maxAge:3600*1000
}));

app.use('/PC',require('./router/PC/index.js')());

app.listen(3000);
app.use(expressStatic('./static'))