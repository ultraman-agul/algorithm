// 输入：
// var fn = function (a, b, c) { return a + b + c }; curryIt(fn)(1)(2)(3);
// 输出：
// 6

function curryIt(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return a + b + c
            }
        }
    }
    // let fnLength = fn.length  // 3
    // let arr = []
    // return function (arg) {
    //     arr.push(arg) // 后传入的参数  1，2，3
    //     if (arr.length < fnLength) {
    //         return arguments.callee
    //     } else { // 传入三个参数的时候可以调用函数处理
    //         console.log(arr)  //[1,2,3]
    //         return fn.apply(this, arr)
    //     }
    // }
}

var fn = function (a, b, c) { return a + b + c };
let result = curryIt(fn)(1)(2)(3);
console.log(result)
