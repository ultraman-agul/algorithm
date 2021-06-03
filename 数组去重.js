// 描述
// 为 Array 对象添加一个去除重复项的方法
// 示例1
// 输入：
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]

// 输出：
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']


Array.prototype.uniq = function () {
    // console.log(this)
    // for (let item of this) {
    //     console.log(item)
    // }
    // console.log({} === {})
    return Array.from(new Set(this))
}
let arr = new Array(false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN)
let result = arr.uniq()
console.log(result)
