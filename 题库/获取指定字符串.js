// 给定字符串 str，检查其是否包含 连续3个数字
// 1、如果包含，返回最先出现的 3 个数字的字符串
// 2、如果不包含，返回 false

function captureThreeNumbers(str) {
    // 方法1
    // if (/\d{3}/.exec(str)) {
    //     return /\d{3}/.exec(str)[0]
    // }
    // return false

    // 方法二
    return str.match(/\d{3}/) ? str.match(/\d{3}/)[0] : false
}

let result = captureThreeNumbers('984asdk243')
console.log(result)