const  { exec } = require('./src/db/mysql.js')

// 查询  返回一个数组
const  sql = 'select * from users;'

// 更新  返回一个对象
// const sql =`update users set name='zhanghai' where age = 29;`

// 插入 返回一个对象
// const sql = `insert into users(name,age,sex) values('yonggang','23','m');`

// 删除  返回一个对象
// const  sql =   `delete from users where name='zhanghai';`

//  执行sql语句
exec(sql).then(result=>{
    console.log(result)
})
