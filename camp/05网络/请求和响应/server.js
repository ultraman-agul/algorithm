const http = require('http');
const fs = require('fs');
var querystring = require('querystring');
const hostname = '127.0.0.1';
const port = 3038;

const server = http.createServer((req, res) => {

    //response.writeHead(响应状态码，响应头对象): 发送一个响应头给请求。
    res.writeHead(200, { 'Content-Type': 'text/html' })
    // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
    //console.log(req);
    // res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    if (req.url == "/" && req.method == 'GET') {
        fs.readFile('./index2.html', 'utf-8', function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data)
        });
    } else if (req.url == '/?name=asher&sex=male' && req.method == 'GET') {
        res.end("success2")
    } else if (req.method == 'POST') {
        var postData = '';
        // 18. 给req对象注册一个接收数据的事件
        req.on('data', function (chuck) {
            /**data事件详解
             * 浏览器每发送一次数据包（chuck），该函数会调用一次。
             * 该函数会调用多次，调用的次数是由数据和网速限制的
             */
            // 19. 每次发送的都数据都叠加到postData里面
            console.log(1111);
            postData += chuck;
        })
        // 20. 到post请求数据发完了之后会执行一个end事件，这个事件只执行一次
        req.on('end', function () {
            // 21. 此时服务器成功接受了本次post请求的参数
            // post请求最终获取到的数据就是url协议组成结构中的query部分
            console.log(postData);
            // 22. 使用querystring模块来解析post请求
            /**
             * querystring详解
             * 参数：要解析的字符串
             * 返回值：解析之后的对象。
             */
            var postObjc = querystring.parse(postData);
            // 23. 打印出post请求参数，
            console.log(postObjc);
            res.end('success')
        })

    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});