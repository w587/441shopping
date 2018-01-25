var express =require("express");
var expressStatic=require('express-static');
var app=express();
// 获取cookie-parser 模块，用于实现cookie数据的存储
var cookieParser = require('cookie-parser');
// 获取cookie-session 模块  用于实现sessin数据的存储
var cookieSession = require('express-session');
var bodyParser = require('body-parser');

app.set('view engine','ejs')
app.set('views','./view');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cookieSession({
  secret: '12345',
  name: 'name',
  cookie: {maxAge: 60000*36},
  resave: false,
  saveUninitialized: true,
}));

app.use('/PC',require('./router/PC/index.js')());

app.listen(3333);
app.use(expressStatic('./static'))