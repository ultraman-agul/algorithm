// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
// 输入：
// 65

// 输出：
// 01000001

function convertToBinary(num) {
    let a = num.toString(2)
    let i = 8 - a.length
    let str0 = ''
    for (; i > 0; i--) {
        str0 += '0'
    }
    console.log(str0 + a)
}

convertToBinary(65)
