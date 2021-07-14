// 描述
// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 { }
// 3. 如果存在多个同名参数，则返回数组
// 4. 不支持URLSearchParams方法
// 示例1
// 输入：
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
// 复制
// 输出：
// [1, 2, 3]

function getUrlParam(sUrl, sKey) {
    let str = sUrl.split('?')[1].split('#')[0]
    let arr1 = str.split('&')
    let obj = {}
    for (let i of arr1) {
        obj[i.split('=')[0]] = []
    }
    for (let i of arr1) {
        obj[i.split('=')[0]].push(Number(i.split('=')[1]))
    }
    if (sKey) {
        for (let item in obj) {
            if (item == sKey)
                return obj[sKey].length == 1 ? obj[sKey].toString() : obj[sKey]
        }
        return ''
    }
    else
        return obj
}


let a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'test')
console.log(a)
