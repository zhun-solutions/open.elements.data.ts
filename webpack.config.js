let mode="development";
let target="web";
if(process.env.NODE_ENV="production"){
    mode=process.env.NODE_ENV;
    tareget="browserslist";
}

module.exports={
 mode:mode,
 target:target, //just to nullify the bug intoduced by using the .browserslistrc in the root folder. this may get fixed in upcoming verisons
 module:{
   
     rules:[
        {
            test:/\.[jt]s$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader",
            }
         }

     ]
 },performance: {
  hints: false,
  maxEntrypointSize: 512000,
  maxAssetSize: 512000
},
 plugins:[],
   resolve: {
    extensions: ['.js', '.ts'],
  },
 devtool:"source-map",// setup soruce map, use false(if we want it to be uncompressed)
 devServer:{
     static:"./dist",
     hot:true,
     historyApiFallback: {
      rewrites: [
        { from: /^\/home/, to: '/index.html' }
      ]
 }}

}