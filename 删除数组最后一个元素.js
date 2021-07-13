// 描述
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入：
// [1, 2, 3, 4]
// 复制
// 输出：
// [1, 2, 3]

function truncate(arr) {
    return arr.slice(0, -1)
}