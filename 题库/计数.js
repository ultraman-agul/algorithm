// 描述
// 统计数组 arr 中值等于 item 的元素出现的次数
// 示例1
// 输入：
// [1, 2, 4, 4, 3, 4, 3], 4
// 复制
// 输出：
// 3

function count(arr, item) {
    return arr.filter((i) => i == item).length
}