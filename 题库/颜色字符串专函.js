// 描述
// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个, 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入
// 示例1
// 输入：
// 'rgb(255, 255, 255)'

// 输出：
// #ffffff

function rgb2hex(sRGB) {
    let str = '#'
    var temp
    sRGB.slice(4, -1).split(',').forEach((value) => {
        temp = parseInt(value.trim()).toString(16)
        str += temp.length == 1 ? '0' + temp : temp
    })
    if (str === '#NaN') return sRGB
    return str
}

let str1 = rgb2hex('abcdefg')
console.log(str1)
