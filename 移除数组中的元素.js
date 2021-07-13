// 描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入：
// [1, 2, 3, 4, 2], 2

// 输出：
// [1, 3, 4]

// function remove(arr, item) {
//     let result = []
//     arr.forEach((value, index) => {
//         if (value !== item)
//             result.push(value)
//     })
//     return result
// }

// function remove(arr, item) {
//     return arr.filter((value) => value !== item)
// }

// 以上不改变原数组，下方为改变原数组

// function remove(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             arr.splice(i, 1)
//             i--
//         }
//     }
//     return arr
// }

// function remove(arr, item) {
//     for (let i = arr.length; i >= 0; i--) {
//         if (arr[i] === item) {
//             arr.splice(i, 1)
//         }
//     }
//     return arr
// }

function remove(arr, item) {
    while (arr.indexOf(item) !== -1) {
        arr.splice(arr.indexOf(item), 1)
    }
    return arr
}

console.log(remove([1, 2, 2, 3, 4, 2, 2], 2))