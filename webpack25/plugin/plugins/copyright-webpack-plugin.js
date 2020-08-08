class CopyrightWebpackPlugin {
//compiler是webpack的一个实例
	apply(compiler) {
//compile是一个同步的钩子，和emit不一样，用tap,同步的函数就不用执行callback
		compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log('compiler');
		})
//compilation中存了这次打包的所有内容，在compilation的assets中存有这次打包生成的内容，
//我们想给打包生成的文件加入一些版权信息，就直接给compilation.assets增加信息就行
		compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, callback) => {
			// debugger;
	//这样就可以让打包生成的文件中多一个copyright文件，文件的内容就是source返回的
	// copyright by dell lee
			compilation.assets['copyright.txt']= {
				source: function() {
					return 'copyright by dell lee'
				},
				size: function() {
					return 21;
				}
			};
			callback();
		})
	}

}

module.exports = CopyrightWebpackPlugin;