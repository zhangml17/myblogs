const mysql = require('mysql')

const con = mysql.createConnection({
    host:'IP',
    user:'用户名',
    password:'密码',
    port:'端口',
    database:'数据库名'
})

// 开始连接
con.connect()

// 查询  返回一个数组
// const  sql = 'select * from users;'

// 更新  返回一个对象
// const sql =`update users set name='zhanghai' where age = 29;`

// 插入 返回一个对象
// const sql = `insert into users(name,age,sex) values('yonggang','23','m');`

// 删除  返回一个对象
// const  sql =   `delete from users where name='zhanghai';`

//  执行sql语句
con.query(sql,(err,result)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(result)
})

// 关闭连接
con.end()