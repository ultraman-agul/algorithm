// 描述
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
// 示例1
// 输入：
// ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c'] 'a'
// 复制
// 输出：
// [0, 6]

function findAllOccurrences(arr, target) {
    let result = []
    arr.forEach((value, index) => {
        if (value == target)
            result.push(index)
    })
    return result
}

console.log(findAllOccurrences(['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c'], 'a'))