const { REDIS_CONF } = require('../conf/db')
const redis = require('redis')

const redisCli = redis.createClient(REDIS_CONF.port,REDIS_CONF.host,REDIS_CONF.opts)

redisCli.on('error',err=>{
    console.error(err)
})


// 封装存、取操作
function set(key,val){
    if(typeof val === 'object'){
        val = JSON.stringify(val)
    }
    redisCli.set(ley,val,redis.print)
}

function get(key){
    const promise = new Promise((resolve,reject)=>{
        redisCli.get(key,(err,val)=>{
            if(err){
                reject(err)
                return
            }

            if(val == null){
                resolve(null)
                return
            }

            try{
                resolve(JSON.parse(val))
            }catch(ex){
                resolve(val)
            }
            
            // redisCli.quit()
        })
    })
    return promise
}

module.exports = {
    get,
    set
}