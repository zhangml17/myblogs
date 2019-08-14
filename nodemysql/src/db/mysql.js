const { MYSQL_CONF }= require('../conf/db.js')
const mysql = require('mysql')

const con = mysql.createConnection(MYSQL_CONF)
con.connect()

// 统一执行sql的函数
function exec(sql){
    const promise = new Promise((resolve,reject)=>{
        con.query(sql,(err,result)=>{
            if(err){
                reject(err)
                return
            }
            resolve(result)
        })
    })

    return promise
}

// 不用关闭连接

module.exports = {
    exec
}
