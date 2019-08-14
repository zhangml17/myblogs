const querystring = require('querystring')
const  handleBlogRouter = require('./src/routes/blogs')
const handleUserRouter = require('./src/routes/users')


const getPostData = req =>{
    const promise = new Promise((resolve,reject)=>{
        if(req.method !== 'POST'){
            resolve({})
            return
        }
        if(req.headers['content-type'] !== 'application/json'){
            resolve({})
            return
        }

        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}

const serverHandle = (req,res)=>{

    res.setHeader('Content-Type','application/json')

    const method = req.method;
    const url = req.url
    const path = url.split('?')[0]
    // const query = querystring.parse(req.url.split('?')[1])
    
    // 设置响应格式
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    // res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');

   
    req.query = querystring.parse(req.url.split('?')[1])

    // 返回的数据
    const resData = {
        method,
        url,
        path,
        // query
    }
    getPostData(req).then(postData =>{
        req.body = postData

        // 处理blog路由
        // const  blogData = handleBlogRouter(req,res)
        // if(blogData){
        //     res.end(
        //         JSON.stringify(blogData)
        //     )
        //     return
        // }

        const  blogResult = handleBlogRouter(req,res)
        if(blogResult){
            blogResult.then(blogData =>{
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return
        }

        // 处理user路由
        // const userData = handleUserRouter(req,res)
        // if(userData){
        //     res.end(
        //         JSON.stringify(userData)
        //     )
        //     return
        // }

        const userResult = handleUserRouter(req,res);
        if(userResult){
            userResult.then(userData=>{
                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }

        //未命中路由
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.write('404 Not Found\n')
        res.end()
    })
}

module.exports = serverHandle