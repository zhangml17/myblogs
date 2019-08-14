const fs = require('fs')
const path = require('path')

// 原始nodejs模拟 promise

// function getFileContent(filename,callback){
//     const fullFileName = path.resolve(__dirname,'files',filename)
//     fs.readFile(fullFileName,(err,data)=>{
//         if(err){
//             console.error(err)
//             return
//         }
//         callback(
//             JSON.parse(data.toString())
//         )
//     })
// }

// getFileContent('a.json',aData=>{
//     console.log('aData',aData)
//     getFileContent(aData.next,bData=>{
//         console.log('bData',bData)
//         getFileContent(bData.next,cData=>{
//             console.log('cData',cData)
//         })
//     })
// })

//  真正promise
function getFileContent(filename){
    const promise = new Promise((resolve,reject)=>{
        const fullFileName = path.resolve(__dirname,'files',filename)
        fs.readFile(fullFileName,(err,data)=>{
            if(err){
               reject(err)
                return
            }
            resolve(
                JSON.parse(data.toString())
            )
        })
    })
    return promise
}

getFileContent('a.json').then(aData=>{
    console.log('aData',aData)
    return getFileContent(aData.next)
}).then(bData=>{
    console.log('bData',bData)
    return getFileContent(bData.next)
}).then(cData=>{
    console.log('cData',cData)
})