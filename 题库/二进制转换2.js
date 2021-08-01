// 给定二进制字符串，将其换算成对应的十进制数字

// 输入：
// '11000000'
// 输出：
// 192
function base10(str) {
    return parseInt(str, 2)
}

let result = base10('11000000')
console.log(result)