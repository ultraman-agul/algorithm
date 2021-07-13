// 描述
// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入：
// [1, 2, 3, 4], 10

// 输出：
// [1, 2, 3, 4, 10]


// function append(arr, item) {
//     // return [...arr, item]
//     return arr.concat(item)
// }

// console.log(append([1, 2, 3, 4], 10))


// 描述
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入：
// [1, 2, 3, 4], 10
// 复制
// 输出：
// [10, 1, 2, 3, 4]
function prepend(arr, item) {
    let arr2 = arr.slice(0)
    arr2.unshift(item)
    return arr2
}

console.log(prepend([1, 2, 3, 4], 10))
