define(['./util.js'],function(util){
    var aUtil = {
        agetFormateDate:function(date){
            return util.getFormatDate(date,2);
        }
    }

    return aUtil;
})