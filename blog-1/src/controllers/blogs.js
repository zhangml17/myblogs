const  { exec } = require('../db/mysql.js')
const getBlogList = (userId,keyword) => {
    // 注意sql语句末尾加空格，不然拼接的时候会出错
    let sql = `select * from blogs where 1=1 `

    if(userId){
        sql += `and userId = '${userId}' `
    }
    // 根据title进行模糊查询 
    if(keyword){
        sql += `and title like '%${keyword}%' `
    }

    sql += `order by createtime desc;`
    console.log(sql)
    return exec(sql)
}

const getDetail = (id)=>{
    return {
        id:1,
        title:'标题A',
        content:"内容A",
        createTime:1562633842083,
        author:'zhangsan'
    }
}

const createBlog = (title,content) =>{
    let createtime = Date.now()
    let userId = 3
    let sql = `insert into blogs(title,content,createtime,userId) values('${title}','${content}','${createtime}','${userId}')`
    return exec(sql)
}

const updateBlog = (title,content,blogId) =>{
    // 注意：sql语句set的字段之间用逗号连接，不要用and
    let sql = `update blogs set title = '${title}',content='${content}' where blogId= '${blogId}' `
    return exec(sql)
}

const delBlog = (blogId) =>{
    let sql =  `delete from blogs where blogId = '${blogId}' `
    return exec(sql)
}

module.exports = {
    getBlogList,
    getDetail,
    createBlog,
    updateBlog,
    delBlog
}