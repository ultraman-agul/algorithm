// 获取数字 num 二进制形式第 bit 位的值。注意：
// 1、bit 从 1 开始
// 2、返回 0 或 1
// 3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
// 输入：
// 128, 8
// 输出：
// 1

// 低进制向高进制转换： parseInt('010',8)  二进制转八进制
// 十进制转换成任意进制： number.toString(2) 十进制转二进制
function valueAtBit(num, bit) {
    let a = num.toString(2)
    return a[a.length - bit]
}

console.log(valueAtBit(128, 8))