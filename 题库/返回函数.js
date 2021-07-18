// 输入：
// functionFunction('Hello')('world')
// 复制
// 输出：
// Hello, world

function functionFunction(str) {
    return function (str1) {
        return `${str}, ${str1}`
    }
}


console.log(functionFunction('Hello')('world'))
