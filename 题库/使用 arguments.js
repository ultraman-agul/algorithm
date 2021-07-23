// 函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换

// 输入：
// 1, 2, 3, 4

// 输出：
// 10

function useArguments() {
    // let result = 0
    // for (let i of arguments) {
    //     result += i
    // }
    // return result
    let arr = [...arguments]
    return arr.reduce((total, num) => {
        return total + num
    })
}

console.log(useArguments(1, 2, 3, 4))