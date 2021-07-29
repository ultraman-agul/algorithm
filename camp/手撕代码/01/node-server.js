const hostname = '127.0.0.1'
const port = '3000'
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index') {
        fs.readFile('./06手写ajax.html', 'utf-8', (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log('success')
                res.end(data)
            }
        })
    } else if (req.method === 'GET') {
        res.end('GET请求')
    } else if (req.url === '/post' && req.method === 'POST') {
        res.end('POST请求')
    }
})

server.listen(port, hostname, () => {
    console.log(`服务器正在运行http:${hostname}:${port}`)
})
