module.exports = {
  publicPath:process.env.NODE_ENV === "production" ? './' : '/',
  // 跨域问题
  // devServer: {
  //   proxy: {
  //     '': {
  //       target:'IP:PORT',
  //       changeOrigin:true,
  //       ws:true,
  //       pathRewrite: {

  //       }
  //     }
  //   }
  // }
}
