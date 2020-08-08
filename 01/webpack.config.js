const path=require('path');
const HtmlWebpackPlugins=require('html-webpack-plugin');

module.exports={
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    entry:{
        main:'./src/index.js'
    },
    devServer:{
        contentBase:'./dist',
        open:true,
        port:8000

    },
    module:{
        rules:[{ 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: 'babel-loader',
		},
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
            
        ]
        
    },
    plugins:[new HtmlWebpackPlugins({
        template:'src/index.html'
    })

    ],
    output:{
       filename:'bundle.js',
       path:path.resolve(__dirname,'dist')
    }
    
}