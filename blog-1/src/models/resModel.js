class BaseModel{
    // data为对象类型，message为字符串类型
    constructor(data,message){
        if(typeof data === "string"){
            this.message = data;
            data = null
            message = null
        }

        if(data){
            this.data = data
        }

        if(message){
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel{
    constructor(data,message){
        super(data,message)
        this.errno = 1
    }
}

class ErrorModel extends BaseModel{
    constructor(data,message){
        super(data,message)
        this.errno = 0
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}