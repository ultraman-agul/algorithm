let arr = [1, 23, 34, 5]
let arr2 = [...arr]
console.log(arr2)

function shengyu(item1, ...arr) {
    console.log(arr)
}

shengyu('asd', 'hello', 'world', 21)

let [a, ...rest] = ['a', 'w', 'e', 'r']
console.log(rest)

// ... 表示 扩展运算符、 剩余参数 、 赋值

// 跨域 jsonp 快排 归并  primise.all   .race  Vue .sync computed watch Vue axios(拦截)
