const { SuccessModel,ErrorModel} = require('../models/resModel')
const { getBlogList ,getDetail,createBlog,updateBlog,delBlog } = require('../controllers/blogs')


const handleBlogRouter = (req,res)=>{
    const method = req.method
    const path = req.url.split('?')[0]

    // 查看博客列表
    if(method === 'GET' && path === '/api/blogs'){
        const userId = req.query.userId || ''
        const keyword = req.query.keyword || ''
        const blogList = getBlogList(userId,keyword)

        return blogList.then(data =>{
            if(data){
                return new SuccessModel(data,'获取博客列表成功')
            }
            return new ErrorModel('获取博客列表失败')
        })
    }

    // if(method === 'GET' && path === '/api/blogs/detail'){
    //     const id = req.query.id
    //     const data = getDetail(id)
    //     return new SuccessModel(data)
    // }

    // 创建博客
    if(method === 'POST' && path === '/api/blogs'){
        const { title,content } = req.body

        const blogResult = createBlog(title,content)

        return blogResult.then(data=>{
            if(data.affectedRows){
                return new SuccessModel('新建博客成功')
            }
            return new ErrorModel('新建博客失败')
        })

    }

    // 编辑指定博客
    if(method === 'POST' && path === '/api/blogs/update'){
        const { title,content } = req.body
        let blogId = req.query.blogId
        const blogResult = updateBlog(title,content,blogId)
        return blogResult.then(data=>{
            if(data.affectedRows){
                return new SuccessModel('更新博客成功')
            }
            return new ErrorModel('更新博客失败')
        })
    }

    // 删除指定博客
    if(method === 'POST' && path === '/api/blogs/del'){
        let blogId = req.query.blogId
        const blogResult = delBlog(blogId)
        return blogResult.then(data=>{
            if(data.affectedRows){
                return new SuccessModel('删除博客成功')
            }
            return new ErrorModel('删除博客失败')
        })
    }
}
module.exports = handleBlogRouter