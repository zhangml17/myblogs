const { SuccessModel,ErrorModel} = require('../models/resModel')
const { login:logInto,userList } = require('../controllers/users')

const handleUserRouter = (req,res)=>{
    const method = req.method
    const path = req.url.split('?')[0]
    if(method === 'GET' && path === '/api/users'){
        const result = userList()
        return result.then(data=>{
            
            if(data){
                return new SuccessModel(data)
            }
            return new ErrorModel('查询出错')
        })
    }

    if(method === 'POST' && path === '/api/users/login'){
        const {username,password} = req.body
        const result = logInto(username,password)
        return result.then(data =>{
            if(data.username){
                return new SuccessModel(data,"登录成功")
            }
            return new ErrorModel('登录失败')
        })
    }
}
module.exports = handleUserRouter