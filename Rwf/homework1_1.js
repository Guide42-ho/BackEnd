const express = require('express')
const app = express()
 
// อ่านไฟล์
let fs = require('fs/promises')

async function createRobotfile () {
    const head = await fs.readFile('head.txt','utf8')
    const body = await fs.readFile('body.txt','utf8')
    const leg = await fs.readFile('leg.txt','utf8')
    const feet = await fs.readFile('feet.txt','utf8')

    const text = head + '\n' + body + '\n' + leg + '\n' + feet +'\n'
    await fs.writeFile('robot.txt',text,'utf8')
}
 //Call function
 createRobotfile()

// fs.readFile('head.txt','utf8',(err, data) => {
//     var text = data + '\n'
//     fs.readFile('body.txt','utf8',(err,data) => {
//         text += data + '\n'
//         fs.readFile('leg.txt','utf8',(err,data) => {
//             text += data + '\n'
//             fs.readFile('feet.txt','utf8',(err,data) => {
//                 text += data
//                 fs.writeFile('robot.txt',text,'utf8',(err) => {
//                     if (err) console.error("Cannot Write File")
//                     else console.log("Write file robot.txt complete!")    
//                 })
//             })
//         })
//     })
//     // if (!err) {
//     //     text += data
//     //     console.log(data)
//     // }
//     // else console.error("Error = ", err.message)
// })

app.listen(3000,() => (
    console.log("Server start")
))