// 描述
// 用 JavaScript 实现斐波那契数列函数, 返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等

// function fibonacci(n) {
//     if (n <= 2)
//         return 1
//     let f1 = 1, f2 = 1, temp
//     for (let i = 2; i < n; i++) {
//         temp = f1
//         f1 = f2
//         f2 = temp + f2
//     }
//     return f2
// }

function fibonacci(n) {
    if (n == 1 || n == 2)
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10))