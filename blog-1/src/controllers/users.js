const  { exec } = require('../db/mysql.js')

const login = (username,password) =>{
    const sql = `select username,password from users where username='${username}' and password='${password}'`

    return exec(sql).then(rows =>{
        return rows[0] || {}
    })
}

const userList = () =>{
    const sql = `select * from users`

    return exec(sql)
}
module.exports = {
    login,
    userList
}