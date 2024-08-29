const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

// 静态文件服务
app.use(express.static('./')); 

// 配置代理
app.use('/api',createProxyMiddleware({
    target: 'http://localhost:8080/api', // 后端服务启动地址
    changeOrigin: true,
    pathRewrite: {
        '^/api': '' // 如果需要调整路径
      }
}))

// 设置端口
const PORT = 5500;//前端服务端口
app.listen(PORT,()=>{
    console.log(`前端运行在端口 http://localhost:${PORT}`)
})