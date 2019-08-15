# nodejs 连接 redis
## 下载redis模块
+ npm  i redis  --registry=https://registry.npm.taobaobao.org
## 连接redis
+ createClient方法有三个参数，第一个是端口，第二个是主机，第三个是设置项对象
+ 连接没有密码的redis时直接传入前两个参数即可
+ 连接有面的redis时有两个方式(示例index.js和index2.js)
