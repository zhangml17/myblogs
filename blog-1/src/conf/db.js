const env = process.env.NODE_ENV;
let MYSQL_CONF
let REDIS_CONF

// 开发环境
if(env === 'development'){
    MYSQL_CONF = {
        host:'192.168.100.200',
        user:'root',
        password:'root',
        port:'3333',
        database:'aaaaa'
    }

    REDIS_CONF = {
        port:6379,
        host:'192.168.100.200',
        opts: {
            auth_pass:'root'
        }
    }
}

// 生产环境
if(env === 'production'){
    MYSQL_CONF = {
        host:'192.168.100.200',
        user:'root',
        password:'root',
        port:'3333',
        database:'aaaaa'
    }

    REDIS_CONF = {
        port:6379,
        host:'192.168.100.200',
        opts: {
            auth_pass:'root'
        }
    }
}
module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}