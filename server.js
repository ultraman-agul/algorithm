const express = require('express')
const app = express()
app.use(express.static(__dirname))

app.listen(91)
console.log('listening 91...')
app.get('/a', (req, res) => {
    res.send('panjinhua')
})


const app2 = express()
app2.listen(92)
// 设置响应头跨域
// app2.get('/a', (req, res) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.send('这里是跨域了')
// })

app2.get('/a', (req, res) => {
    // res.header('Access-Control-Allow-Origin', '*')
    let callback = req.query['callback']
    res.send(callback + "('这里是跨域了')")
})
console.log('listening 92...')