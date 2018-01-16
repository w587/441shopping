var express =require("express");
var expressStatic=require('express-static');
var app=express();

app.set('view engine','ejs')


app.use('/index',require('./router/index.js')());

app.listen(3000);
app.use(expressStatic('./static'))