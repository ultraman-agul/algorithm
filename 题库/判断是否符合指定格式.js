// 给定字符串 str，检查其是否符合如下格式
// 1、XXX - XXX - XXXX
// 2、其中 X 为 Number 类型

function matchesPattern(str) {
    // 1、需要返回匹配值的用match或exec
    // let flag = str.match(/^\d{3}-\d{3}-\d{4}$/)
    // return flag ? true : false

    // 2、这道题应该用test
    return /^\d{3}-\d{3}-\d{4}$/.test(str)
}

let result = matchesPattern('1800-555-1212')
console.log(result)