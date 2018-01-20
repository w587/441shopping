var crypto = require('crypto');
module.exports = function(msg){
	var md5 = crypto.createHash('md5');
	md5.update(msg); // 其中str就是要想实现加密处理的文本内容
	var result = md5.digest('hex');
	return result;
}