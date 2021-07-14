// 描述
// 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
// 示例1
// 输入：
// [1, 2, 4, 4, 3, 3, 1, 5, 3]
// 输出：
// [1, 3, 4]

function duplicates(arr) {
    let result = []
    arr.forEach(function (value, index) {
        if (index !== arr.length - 1)
            if (arr.indexOf(value, index + 1) !== -1 && !result.includes(value))
                result.push(value)
    })
    // 也可以这么写，两者前后寻找的位置不唯一则重复
    // arr.forEach((value) => {
    //     if (arr.indexOf(value) !== arr.lastIndexOf(value) && !result.includes(value))
    //         result.push(value)
    // })
    return result
}

//  从后开始查找位置不是当前位置，且当前元素为数组第一次出现的元素，避免重复
function duplicates(arr) {
    return arr.filter((value, index) => {
        return arr.lastIndexOf(value) !== index && index == arr.indexOf(value)
    })
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))