const redis = require('redis')
const PORT = 6379
const HOST = '192.168.100.200'
const PASSWORD = 'root'
// 设置项
const OPTS = {
}
// 创建客户端
const redisCli = redis.createClient(PORT,HOST,OPTS)
// 设置密码方式二
redisCli.auth(PASSWORD,()=>{
    console.log('通过认证')
})
redisCli.on('ready',(res)=>{
    console.log('ready')
})


redisCli.on('error',err=>{
    console.error(err)
})

// 测试
redisCli.set('username','zhangsan123',redis.print)
redisCli.get('username',(err,val) => {
    if(err){
        console.error(err)
        return
    }
    console.log('val--->',val)

    // 退出
    redisCli.quit()
})
