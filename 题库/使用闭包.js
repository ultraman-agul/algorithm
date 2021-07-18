// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]() ，结果与 fn(arr[i]) 相同

function makeClosures(arr, fn) {
    let fnArr = []
    for (let i in arr) {
        fnArr.push(fn.bind(this, arr[i]))
    }
    return fnArr

    // return arr.map(el => {
    //     return function () {
    //         return fn(el);
    //     }
    // })
}

let arr2 = makeClosures([1, 2, 3], function (x) {
    return x * x;
})

console.log(arr2[1]())
// console.log(arr2)

