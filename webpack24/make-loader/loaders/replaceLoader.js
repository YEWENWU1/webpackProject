const loaderUtils = require('loader-utils');

//传入参数表示引入文件的代码，对代码做一个变更再返回出去
module.exports = function(source) {
	return source.replace('lee', 'world');
}