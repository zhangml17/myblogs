const redis = require('redis')
const PORT = 6379
const HOST = '192.168.100.200'
const PASSWORD = 'root'

// 设置密码方式一
// 设置项
const OPTS = {
    auth_pass:PASSWORD
}
// 创建客户端
const redisCli = redis.createClient(PORT,HOST,OPTS)

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
