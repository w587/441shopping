// 在app.js中需要设定一系列开发所需的属性
var express = require('express');
//获取mysql相关模块
var mysql=require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: '441Shopping'
 });
var data={"x":"x"}
module.exports = function(){
	var router = express.Router();
	
	
	router.get('/',function(req,res){
		console.log(req.query.name)

		res.send(data)
	})

	router.get('/StarItem',function(req,res){
		console.log(req.query.index)
		if (req.query.index==1) {
			var Sel=`SELECT * FROM goodtable ORDER BY RAND() LIMIT 9`
		}else{
			var Sel=`SELECT * FROM goodtable WHERE good_cate='4'`
		}
		conn.query(Sel,(error,data)=>{
			if(error){
				console.log('单品查询出错,',error)
			}else{
				res.send(data)
			}
		})
		
	})

	return router;
}
