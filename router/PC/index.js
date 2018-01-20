// 在app.js中需要设定一系列开发所需的属性
var express = require('express');
//获取mysql相关模块
var MD5=require('../../utils/MD5.js')
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
	// 未登录的购物车
	var defauCart=[]
	// 首页测试
	router.get('/',function(req,res){
		console.log('session',req.session)
		res.send({usename:req.session['accout']})
	})

	// 首页小模块
	router.get('/StarItem',function(req,res){
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

	// 详情页
	router.get('/detail',(req,res)=>{
		var detSel=`SELECT * FROM 441shopping.goodtable WHERE id='${req.query.id}'`
		conn.query(detSel,(error,data)=>{
			if(error){
				console.log('查询详情出错,',error)
			}else{
				res.send(data)
			}
		})
	})

	// 详情页点击加入购物车
	router.get('/detail/ShowCart',(req,res)=>{
		var detSel=`SELECT * FROM 441shopping.goodtable WHERE id='${req.query.id}'`
		var rep=false;
		conn.query(detSel,(error,data)=>{
			if(error){
				console.log('查询详情出错,',error)
			}else{
				// 需要优化！！！！！！！商品重复时查询速度过慢
				// 判断默认购物车是否为空，
				// 空则直接添加数据，
				// 否则判断是否有同样的商品，
				// 有相同的则数量+1，
				// 否则直接添加一件商品信息
				var items={"id":data[0].id,"name":data[0].good_name,"img":data[0].good_img,"price":data[0].good_price,"good_num":1}
				if (defauCart.length==0) {
					defauCart.push(items)
				}else{
					for (var i=0;i<defauCart.length;i++) {
						if (data[0].id==defauCart[i].id) {
							defauCart[i].good_num+=1
							rep=true;
							break
						}else{
							rep=false
						}
					};
					if(rep==false){
						defauCart.push(items)
					}
				}
			}
		})
		
	})

	// 大模块数据
	router.get('/BigMould',(req,res)=>{
		var detSel=`SELECT * FROM 441shopping.goodtable WHERE good_cate='${req.query.id}'  LIMIT 0, 6`
		conn.query(detSel,(error,data)=>{
			if(error){
				console.log('查询详情出错,',error)
			}else{
				res.send(data)

			}
		})
	})

	//购物车页面载入
	router.get('/ShowCart',(req,res)=>{
		if ('session',req.session['accout']==undefined) {
			res.send(defauCart)
		}else{
			// 查询数据库
		}
	})

	//注册
	router.get('/regist',(req,res)=>{

		// 获取数据=>根据邮箱查询是否注册=>是的话返回失败=>否则进行用户信息添加

		var data=JSON.parse(req.query.data) 
		var password=MD5(data.password)
		var sel=`SELECT * FROM 441shopping.use_table WHERE  use_email='${data.email}'`

		var inset=`INSERT INTO 441shopping.use_table 
					(use_email, use_name, use_pwd, use_phone)
					VALUES
					('${data.email}', '${data.nickname}', '${password}', '${data.phone}')`
		conn.query(sel,(error,data)=>{
			if(error){
				console.log('查询用户表出错:',error)
			}else{
				if (data.length>0) {
					res.send({"state":"0"})
				}else{
					
					conn.query(inset,(error)=>{
						if(error){
							console.log('注册失败',error)
						}else{
							res.send({"state":"1"})
						}
					})
				}
			}
		})
	})

		//登录
	router.get('/Login',(req,res)=>{

		// 获取数据=>
		// 根据邮箱或昵称查询用户是否存在=>
		// 根据返回的数据判断并回馈到前台
		
		var data=JSON.parse(req.query.data) 
		var password=MD5(data.password)
		var sel=`SELECT * FROM 441shopping.use_table WHERE use_pwd='${password}'&&use_email='${data.userName}'||use_name='${data.userName}'`
		conn.query(sel,(error,data)=>{
			if(error){
				console.log('查询用户表出错',error)
			}else{
				
				if (data.length==0) {
					res.send({"state":"0"})
				}else{
					req.session['accout']=data[0].use_name
					console.log('登录成功',req.session)
					res.send({"state":"1"})
				}
			}
		})
	})
	return router;
}
