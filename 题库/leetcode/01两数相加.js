// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
// 输入：nums = [2, 7, 11, 15], target = 9
// 输出：[0, 1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回[0, 1]。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法
// var twoSum = function (nums, target) {
//     for (let a = 0; a < nums.length; a++) {
//         for (let i = a + 1; i < nums.length; i++) {
//             if (nums[a] + nums[i] === target) {
//                 return [a, i]
//             }
//         }
//     }
// };

// 哈希法,省去一次遍历,空间换时间
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
}

nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))