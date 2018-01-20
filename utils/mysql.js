var mysql = require('mysql');
class DataBaseUtil{
	constructor(){
		super();
		this.db = mysql.createConnection({
			host:'localhost',
			user:'root',
    		password: 'root',
    		database: '441Shopping'
		});
	}
	sql(sql,func){
		this.db.query(sql,func);
	}
}