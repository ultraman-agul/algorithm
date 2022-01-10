# leetcode



### [1. 两数之和](https://leetcode-cn.com/problems/two-sum)

> 思路： 
>
> 1. 方法一： 因为只有两个数求和而且已知target，所以使用暴力法可以轻易解答，使用两个for循环，相等则返回下标即可,时间复杂度为O(n2)
> 2. 方法二：
>    - 创建一个Map对象，遍历数组时如果map中没有target减当前值的值（也就是另一半）则存入当前值，值为下标
>    - 如果有另一半则返回当前值的以及另一半的下标
>    - 这种做法只需一次遍历，时间复杂度为O(n)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [i, map.get(target - nums[i])]
        }else{
            map.set(nums[i], i)
        }
    }
    return []
};
```



### [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers)

> 思路： 
>
> 1. 创建头节点dummy，位置不变，使用current去遍历链表，执行操作，最后返回dummy.next
> 2. 判断两链表不为空则进行遍历，相加后的值再加上上次遍历是否进一的值再取余，为当前节点的值
> 3. 判断此次相加是否需要进位
> 4. 最后还需要判断是否进一，如果是则新建一个节点为1

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let dummy
    let current
    dummy = new ListNode()
    current = dummy
  while(l1 || l2){
      sum = 0 
      if(l1){
          sum += l1.val
          l1 = l1.next
      }
      if(l2){
          sum += l2.val
          l2 = l2.next
      }
      sum += carry
      current.next = new ListNode(sum % 10)
      current = current.next
      carry = Math.floor(sum / 10)
  }
  if(carry){
      current.next = new ListNode(carry)
  }
  return dummy.next
};
```



### [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

> 思路： 这是一道滑动窗口的算法，两个指针一前一后，中间是不同的值（自然想到很适合不重复数据的Set对象），遇到不同的值则添加，相同则set从头开始删除，直到没重复为止，每次对set的add操作都记录size，最后返回最大size。

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0
    if(s.length <= 1){
        return s.length
    }
    let mySet = new Set()
    for(i = 0, j = 0; i < s.length; i++){
        if(!mySet.has(s[i])){
            mySet.add(s[i])
            maxLength = Math.max(maxLength, mySet.size)
        }else{
            while(mySet.has(s[i])){
                mySet.delete(s[j])
                j++
            }
            mySet.add(s[i])
        }
    }
    return maxLength
};
```



### [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

> 思路： 回文有两种情况，回文字符串的长度为奇数或偶数。创建一个函数，如果没超过边界而且两边的值相同则两边扩张。(i-1, i+1)和(i, i+1)对应的是这两种情况

```js
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    if(s.length < 2){
        return s
    }
    let maxLength = 1
    let start = 0
    function expandAroundCenter(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if(right - left + 1 > maxLength)
            {
                start = left
                maxLength = right - left + 1
            }
            left--
            right++
        }
    }
    for(let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1)
        expandAroundCenter(i, i + 1)
    }
    return s.substring(start, start + maxLength)
};
```



### [9. 回文数](https://leetcode-cn.com/problems/palindrome-number/)

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString()
    let left = 0, right = str.length - 1
    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
};
```



### [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = strs[0]
    for(let i = 0; i < result.length; i++){
        for(let item of strs){
            if(item[i] !== result[i]){
                return result.slice(0, i)
            }
        }
    }
    return result
};
// @lc code=end


```



### [15. 三数之和](https://leetcode-cn.com/problems/3sum/)

> 思路：
>
> 1. 第一步对数组进行排序。
> 2. 三个指针分别是当前值、下一个值以及最后一个值
> 3. 每次最外层循环固定当前值，移动后两个指针往中间靠，如果大于0则移动后一个节点，如果小于0则移动前一个节点。
> 4. 每次移动判断是否和前一个值相同，如果相同则跳过则此循环，这样避免出现重复的值。

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const result = []
    for(let i = 0; i < nums.length - 2; i++) { 
        if(i!==0 && nums[i] === nums[i-1]){
            continue // 去除重复结果
        }
        let start = i+1
        let end = nums.length-1
        while(start<end){
            let flag = nums[i] + nums[start] + nums[end]
            if(flag === 0){
                result.push([nums[i], nums[start], nums[end]])
                start++
                end--
                while(nums[start] === nums[start-1]){
                    start++ // 去除重复结果
                }
                while(nums[end] === nums[end+1]){
                    end-- // 去除重复结果
                }
            }else if(flag < 0){
                start++
            }else{
                end--
            }
        }
    }
    return result
};
```



### [19. 删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head  // 创建一个新的节点防止只有一个节点就是删除的节点，直接返回head是错误的，应该返回null
    let n1 = dummy
    let n2 = dummy
    // n2在前面探路
    for(let i = 0; i < n; i++){ 
        n2 = n2.next
    }
    // 如果n2到达最后一个节点，则n1的下一个节点就是要删除的
    while(n2.next!==null){
        n1 = n1.next
        n2 = n2.next
    }
    n1.next = n1.next.next
    return dummy.next
};
```



### [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

> 思路：
>
> 1.  栈的操作，后进先出。
> 2. 如果Map中已经有了，则为左括号，入栈一个右括号。
> 3. 如果没有则为右括号，需要出栈一个括号，如果不相同则为false。
> 4. 最后栈为空则全部闭合。

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const m = new Map()
    m.set('(', ')')
    m.set('[', ']')
    m.set('{', '}')
    const stack = []
    for(let i of s){
        if(m.get(i)){  // 如果map中有证明是左括号，往栈中加入右括号
            stack.push(m.get(i))
        }else{
            if(stack.pop() !== i){ 
        // 如果map中没有，证明是右括号需要和最后一个值比较如果相同则最近的符号是与之匹配的左括号
                return false
            }
        }
    }
    if(stack.length !== 0) {
        return false
    }
    return true
};
```



### [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let cur = new ListNode()
    let dummy = cur
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            cur.next = list1
            list1 = list1.next
        }else{
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    if(list1 !== null){
        cur.next = list1
    }
    if(list2 !== null){ 
        cur.next = list2
    }
    return dummy.next
};
```



### [24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let current = dummy
    while(current.next !== null && current.next.next !== null){
        let n1 = current.next
        let n2 = current.next.next
        n1.next = n2.next
        current.next = n2
        n2.next = n1
        current = n1
    }
    return dummy.next
}; 
```

### [26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1){
        return nums.length
    }
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                nums.splice(j, 1)
                j--
            }
        }
    }
    return nums.length
};
```



### [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0){
        return 0
    }
    while(nums.indexOf(val) !== -1){
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length
};
```



### [35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid
    while(left <= right){
        mid = Math.floor(left - (left - right) / 2)
        if(nums[mid] === target){
            return mid
        }
        if(nums[mid] >= target){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return right + 1  // 可以处理小于最小值，数组之中，大于最大值的情况
};
```



### [49. 字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for(const str of strs){
        const keyStr = str.split('').sort().join('')    // 将字符串变成数组排序，然后转回来判断map中是否有，如果有则push，如果没有则加入一个新的项
        if(map.has(keyStr)){
            map.set(keyStr, [...map.get(keyStr), str])
        }else{
            map.set(keyStr, [str])
        }
    }
    return Array.from(map.values())
};
```



### [53. 最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)

> 思路： 动态规划的典型题，遍历每个元素时都要比较（自身）和（自身加上前面的值）哪个大？ 最后取得最大的值

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let memo = nums[0]
    let max = nums[0]
    for(let i = 1; i < nums.length; i++) {
        memo = Math.max(memo + nums[i], nums[i])
        if(max < memo){
            max = memo
        }
    }
    return max
}; 
```



### [54. 螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0){
        return []
    }
    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    let left = 0
    let direction = 'right'   // 遵循规律，右下左上的方向，遍历完一个方向后改变边界值和方向
    const result = []
    while(left <= right && top <= bottom){
        if(direction === 'right'){
            for(let i = left; i <= right; i++){
                result.push(matrix[top][i])
            }
            top++
            direction = 'bottom'
        }else if(direction === 'bottom'){
            for(let i = top; i <= bottom; i++){
                result.push(matrix[i][right])
            }
            right--
            direction = 'left'
        }else if(direction === 'left'){
            for(let i = right; i >= left; i--){
                result.push(matrix[bottom][i])
            }
            bottom--
            direction = 'top'
        }else if(direction === 'top'){
            for(let i = bottom; i >= top; i--){
                result.push(matrix[i][left])
            }
            left++
            direction = 'right'
        }
    }
    return result
};
```



### [55. 跳跃游戏](https://leetcode-cn.com/problems/jump-game/)

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 动态规划-递归
var canJump = function(nums) {
    // 1表示能到达，0表示不确定，-1表示不能到达
    const memo = Array(nums.length).fill(0)
    memo[nums.length - 1] = 1 
    function jump(position){
        if(memo[position] === 1){
            return true
        }else if(memo[position] === -1){
            return false
        }
        const maxJump = Math.min(position + nums[position], nums.length - 1)
        for(let i = position + 1; i <= maxJump; i++){
            const result = jump(i)
            if(result == true){
                memo[position] = 1
                return true
            }
        }
        memo[position] = -1
        return false
    }
    return jump(0)
};
```

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心算法
var canJump = function(nums) {
    let maxJump = nums.length - 1
    for(let i = nums.length - 2; i >= 0; i--){
        if(i + nums[i] >= maxJump){  // 后面往前推，设可以到达终点的点为maxJump，如果一个点可以跳的距离大于maxJump就设它为maxJump,经过它能到达终点
            maxJump = i
        }
    }
    return maxJump === 0
};
```



### [56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/)

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1){
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])   // 数组排序
    const result = []
    let current = intervals[0]
    for(let interval of intervals){        // 用这种方法，否则写成二维数组很容易乱
        if(current[1] >= interval[0]){
            current[1] = Math.max(current[1], interval[1])   // 有可能前面的尾部比后面的尾部还要大
        }else {
            result.push(current)
            current = interval
        }
    }
    if(current.length !== 0){       // 最后一个元素是合并的，那么它是还没有push到数组中的，需要加入
        result.push(current)
    }
    return result
};
```



### [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)

```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 当前路径等于上边的格子的路径数加上左边格子路径数，第一行以及第一列的格子路径数都为1，所以只需要遍历求出每个格子的路径数，最后得到答案。
var uniquePaths = function(m, n) {
    const memo = []
    for(let i = 0; i < n; i++){
        memo.push([])
    }
    for(let row = 0; row < n; row++){
        memo[row][0] = 1
    }
    for(let column = 0; column < m; column++){
        memo[0][column] = 1
    }
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            memo[i][j] = memo[i-1][j] + memo[i][j-1]
        }
    }
    return memo[n-1][m-1]
};
```



### [66. 加一](https://leetcode-cn.com/problems/plus-one/)

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1
    while(digits[i] === 9){
        digits[i] = 0
        i--
    }
    if(i < 0){
        digits.unshift(1)
    }else{
        digits[i] += 1
    }
    return digits
};
```



### [67. 二进制求和](https://leetcode-cn.com/problems/add-binary/)

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const result = []
    let [i, j] = [a.length-1, b.length-1]
    let carry = 0
    let sum = 0
    while(i >= 0 || j >= 0 || carry){
        let numA = Number(a[i]) ? Number(a[i]) : 0
        let numB = Number(b[j]) ? Number(b[j]) : 0
        sum = numA + numB + carry
        // 只有三种情况，1.  0、1
        // 2. 2
        // 3. 3
        if(sum === 2){ 
            carry = 1
            sum = 0
        }else if(sum === 3){
            carry = 1
            sum = 1
        }else{
            carry = 0
        }
        i--
        j--
        result.unshift(sum)
    }
    return result.join('')
};
```



### [69. Sqrt(x)](https://leetcode-cn.com/problems/sqrtx/)

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0
    if(x === 0){
        return 0
    }
    while(true){
        i++
        if(i * i <= x && (i + 1) * (i + 1) > x ){
            return i
        }
    }
};
```





### [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = []
    memo[1] = 1
    memo[2] = 2
    for(let i = 3; i <= n; i++){
        memo[i] = memo[i-1] + memo[i-2]
    }
    return memo[n]
};
```



### [73. 矩阵置零](https://leetcode-cn.com/problems/set-matrix-zeroes/)

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // 1.判断第一行第一列是否包含0
    // 2.判断当前行当前列是否有0，如果有，则在该行的第一列和该列的第一行标为0
    // 3.判断遍历第一行第一列，如果有0，则该行列都为0
    // 4.根据第1步的判断给第一行第一列进行操作

    // 1.判断第一行第一列是否包含0
    let rowHas0
    let columnHas0
    let n = matrix[0].length
    let m = matrix.length
    for(let i = 0; i < n; i++){
        if(matrix[0][i] === 0){
            rowHas0 = true
            break
        }
    }
    for(let i = 0; i < m; i++){
        if(matrix[i][0] === 0){
            columnHas0 = true
            break
        }
    }

    // 2.判断当前行当前列是否有0，如果有，则在该行的第一列和该列的第一行标为0
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][j] === 0){
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }

    // 3. 遍历，如果判断为第一行或第一列为0，则为0
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0
            }
        }
    }

    if(rowHas0){
        for(let i = 0; i < n; i++){
            matrix[0][i] = 0
        }
    }
    if(columnHas0){
        for(let i = 0; i < m; i++){
            matrix[i][0] = 0
        }
    }

    return matrix
}
```



### [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 这种方法是有一个指针在前面探路的方式 很不推荐，但却是我第一个想到的办法。。
var deleteDuplicates = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let current = head
    let preNode = head
    while(current !== null){
        while(preNode.val === current.val){
            preNode = preNode.next
            if(!preNode){
                break
            }
        }
        current.next = preNode
        current = current.next
    }
    return dummy.next
};



// 这种方法只需要使用next指针判断，如果相同，则next为next的next，如果不相同则移动指针
var deleteDuplicates = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let current = head
    while(current !== null && current.next !== null){
        if(current.val === current.next.val){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
    return dummy.next
};
```



### [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 顺序不能乱，三个指针
var reverseList = function(head) {
    let pre = null
    let cur = head
    let next = head
    while(cur !== null){
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};

// 使用js的解构赋值，顺序可以乱，两个指针即可
var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur !== null){
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    return pre
};

```



### [92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 这道题的反转方法与上一题相同，但是注意的是反转后的链表需要和原链表进行连接，需要设置占位的变量，画图才能清晰思路，还要判断left为head节点情况
var reverseBetween = function(head, left, right) {
    let n = 1
    let cur = head
    let pre = null
    let next = head
    while(n < left){
        pre = cur
        cur = cur.next
        n++
    }
    let pre2 = pre
    let cur2 = cur
    for(let i = left; i <= right; i++){
        // next = cur.next
        // cur.next = pre
        // pre = cur
        // cur = next
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    if(pre2 !== null){
        pre2.next = pre
    }else{
        head = pre
    }
    cur2.next = cur
    return head

};
```



### [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
// 记录当前值之前的所有最低的价格，因为它是最佳买入的机会
// 用当前值减去最低的买入价格，记录最高利润
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }else if((prices[i] - minPrice) > maxProfit){
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
};
```



### [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
// 这个方法是根据如果上下坡则不处理，获取到达坡底和峰顶的值，进行相减，注意相等时也需要i++否则死循环
var maxProfit = function(prices) {
    if(prices.length === 0){
        return 0
    }
    let i = 0
    let valley = prices[0]
    let peak = prices[0]
    let maxProfit = 0
    while(i < prices.length - 1){
        while(i < prices.length - 1 && prices[i] >= prices[i+1]){ // 下坡
            i++
        }
        valley = prices[i]
        while(i < prices.length - 1 && prices[i] <= prices[i+1]){ // 上坡
            i++
        }
        peak = prices[i]
        maxProfit += peak - valley
    }
    return maxProfit
};


// 方法二： 通过比较后一天是否大于今天，如果大于，则计算利润，每天比较
var maxProfit = function(prices) {
    if(prices.length === 0){
        return 0
    }
    let i = 0
    let maxProfit = 0
    while(i < prices.length - 1){
        if(prices[i+1] - prices[i] > 0){
            maxProfit += prices[i+1] - prices[i]
        }
        i++
    }
    return maxProfit
};
```



### [125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g, '')  // \W : 匹配非 数字,字母,_
    if(s.length <= 1){
        return true
    }
    let left = 0
    let right = s.length - 1
    while(left < right){
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true
};
```



### [134. 加油站](https://leetcode-cn.com/problems/gas-station/)

```js
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0
    let totalCost = 0
    for(let i = 0; i < gas.length; i++){
        totalGas += gas[i]
        totalCost += cost[i]
    }
    // 当总的汽油小于总的消耗的话是不能环绕一圈的
    if(totalCost > totalGas){
        return -1
    }
    // 总的汽油大于等于的话那肯定可以走一圈，现在只需找哪个加油站作为起点即可
    let currentGas = 0
    let start = 0
    for(let i = 0; i < gas.length; i++){
        currentGas = gas[i] + currentGas - cost[i]
        if(currentGas < 0){  // 遇到过不去的地方，继续遍历，如果回退遍历也是过不去的
            currentGas = 0
            start = i + 1
        }
    }
    return start
};
```



### [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null){
        return false
    }
    let slow = head
    let fast = head
    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next
        fast = fast.next.next  // fast每次走两步，slow每次走一步，如果有环则fast会追上slow
        if(slow === fast){
            return true
        }
    }
    return false
};
```



### [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null){
        return null
    }
    let isCycle = false
    let slow = head
    let fast = head
    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            isCycle = true
            break
        }
    }
    if(!isCycle){
        return null
    }
    // 如果两者相遇了，则让fast回到head，fast和slow走相同步数可以相遇，相遇点则是入环位置
    fast = head
    while(slow !== fast){
        fast = fast.next
        slow = slow.next
    }
    return fast
};
```



### [152. 乘积最大子数组](https://leetcode-cn.com/problems/maximum-product-subarray/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = []
    let minProduct = []
    maxProduct[0] = nums[0]
    minProduct[0] = nums[0]
    let max = nums[0]
    for(let i = 1; i < nums.length; i++){
        // 需要考虑到负数×负数可能会有最大的值，所以需要记录最小的值，最小的值×当前值可能为最大
        maxProduct[i] = Math.max(nums[i], maxProduct[i-1] * nums[i], minProduct[i-1] * nums[i])
        minProduct[i] = Math.min(nums[i], maxProduct[i-1] * nums[i], minProduct[i-1] * nums[i])
        max = Math.max(max, maxProduct[i])
    }
    return max
};
```



### [153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length <= 1){
        return nums
    }
    let left = 0
    let right = nums.length - 1
    // 当没有进行反转，还是一个升序数组则返回第一项
    if(nums[right] > nums[0]){
        return nums[0]
    }
    let mid
    while(left < right){
        mid = Math.floor(left + (right - left)/ 2) // 防止(left + right) / 2 溢出
        if(nums[mid - 1] > nums[mid]){
            return nums[mid]
        }
        if(nums[mid] > nums[mid + 1]){
            return nums[mid + 1]
        }
        if(nums[mid] > nums[left]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
};
```



### [187. 重复的DNA序列](https://leetcode-cn.com/problems/repeated-dna-sequences/)

```js
/**
 * @param {string} s
 * @return {string[]}
 */
// Map写法，如果已存在则加一，不存在则为一，最后大于一则加入返回的数组
var findRepeatedDnaSequences = function(s) {
    const map = new Map()
    const result = []
    for(let i = 0; i <= s.length - 10; i++){
        let str = s.slice(i, i + 10)
        if(map.has(str)){
            map.set(str, map.get(str)+1)
        }else{
            map.set(str, 1)
        }
    }
    map.forEach((value, key) => {
        if(value > 1){
            result.push(key)
        }
    })
    return result
};

// Set写法，两个set，如果第一个存在则第二个set执行add，否则第一个set执行add
var findRepeatedDnaSequences = function(s) {
    const set = new Set()
    const result = new Set()
    for(let i = 0; i <= s.length - 10; i++){
        let str = s.substring(i, i + 10)
        if(set.has(str)){
            result.add(str)
        }else{
            set.add(str)
        }
    }
    return Array.from(result)
};
```



### [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var rob = function(nums) {
    if(nums.length === 0){
        return 0
    }
    if(nums.length === 1){
        return nums[0]
    }
    const memo = []
    memo[0] = nums[0]
    memo[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++){ 
        // 每一步都判断当前值加上上个的和与上个的大小，取大的值为当前值
        memo[i] = Math.max(nums[i] + memo[i-2], memo[i-1])
    }
    return memo[nums.length - 1]
};

// 方法二 类似于斐波那契数列，去除了临时数组，更新前两个的值。
var rob = function(nums) {
    if(nums.length === 0){
        return 0
    }
    if(nums.length === 1){
        return nums[0]
    }
    let pre2 = nums[0]
    let pre1 = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++){ 
        // 每一步都判断当前值加上上个的和与上个的大小，取大的值为当前值
        let temp = Math.max(nums[i] + pre2, pre1)
        pre2 = pre1
        pre1 = temp
    }
    return pre1
};
```





### [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 走完headA再走headB，走完headB再走headA，这可以让他们最终能在相同步数走到交点位置
    let n1 = headA
    let n2 = headB
    while(n1 !== n2){
        if(n1 !== null){
            n1 = n1.next
        }else{
            n1 = headB
        }
        if(n2 !== null){
            n2 = n2.next
        }else{
            n2 = headA
        }
    }
    return n1
};
```



### [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)

```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深度优先遍历＋沉没
// 遇到1则count++，开始深度遍历遇到1则设置为0，指到周围都被0包围再遍历下一个
var numIslands = function(grid) {
    function dfs(row, col){
        if(row < 0 || col < 0 || col > grid[0].length - 1 || row > grid.length - 1 || grid[row][col] === '0'){
            return ;
        }
        grid[row][col] = '0'
        dfs(row-1, col)
        dfs(row+1, col)
        dfs(row, col-1)
        dfs(row, col+1)
    }

    let count = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                count++
                dfs(i, j)
            }
        }
    }
    return count
};
```



### [217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set()
    for(let i of nums){
        if(set.has(i)){
            return true
        }else{
            set.add(i)
        }
    }
    return false
};
```



### [219. 存在重复元素 II](https://leetcode-cn.com/problems/contains-duplicate-ii/)

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 暴力法。On^2
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j - i <= k; j++){
            if(j >= nums.length){
                break
            }
            if(nums[i] === nums[j]){
                return true
            }
        }
    }
    return false
};

// 使用map On
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            if(Math.abs(map.get(nums[i]) - i) <= k){
                return true
            }else{
                map.set(nums[i], i)
            }
        }else{
            map.set(nums[i], i)
        }
    }
    return false
};
```



### [238. 除自身以外数组的乘积](https://leetcode-cn.com/problems/product-of-array-except-self/)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 创建两个数组记录左边的乘积  右边的乘积，最后遍历相乘即可
var productExceptSelf = function(nums) {
    const len = nums.length
    const [left, right] = [Array(len).fill(1), Array(len).fill(1)]
    for(let i = 1; i <= nums.length; i++){
        left[i] = nums[i-1] * left[i-1]
    }
    for(let i = nums.length - 2; i >=0; i--){
        right[i] = nums[i+1] * right[i+1]
    }
    const result = []
    for(let i = 0; i < nums.length; i++){
        result[i] = left[i] * right[i]
    }
    return result
};
```



### [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 创建一个map，第一个字符串的每个字符的个数相加，第二个字符串的每个字符的个数相减，最后判断都为0则为true
var isAnagram = function(s, t) {
    const map = new Map()
    if(s.length !== t.length){
        return false
    }
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i])+1)
        }else{
            map.set(s[i], 1)
        }

        if(map.has(t[i])){
            map.set(t[i], map.get(t[i])-1)
        }else{
            map.set(t[i], -1)
        }
    }
    for(let letter of map){
        if(letter[1] !== 0){
            return false
        }
    }
    return true
};
```



### [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 方法1，遇到0则删除0，然后记录0的个数，最后面加上
var moveZeroes = function(nums) {
    let zeroNum = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i, 1)
            i--
            zeroNum++
        }
    }
    for(let i = 0; i < zeroNum; i++){
        nums.push(0)
    }
    return nums
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法二，把非零的都往前移，最后把后面的位置补充为0
var moveZeroes = function(nums) {
    let j = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[j] = nums[i]
            j++
        }
    }

    for(; j < nums.length; j++){
        nums[j] = 0
    }
    return nums
};
```



### [328. 奇偶链表](https://leetcode-cn.com/problems/odd-even-linked-list/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null){
        return null
    }
    if(head.next === null){
        return head
    }
    let odd = head
    let even = head.next
    const connect = head.next
    while(even !== null && even.next !== null){  // 这里需要偶数进行判断，因为偶数在奇数前面，如果他的下一个不为空则奇数的下下个不为空，可以执行
        odd.next = odd.next.next
        odd = odd.next
        even.next = even.next.next
        even = even.next
    }
    odd.next = connect
    return head
};
```



### [349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length === 0 || nums2.length === 0){
        return []
    }
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const result = []
    for(let item of set1){
        if(set2.has(item)){
            result.push(item)
        }
    }
    return result
};
```



### [419. 甲板上的战舰](https://leetcode-cn.com/problems/battleships-in-a-board/)

```js
/**
 * @param {character[][]} board
 * @return {number}
 */
// 做法与200题岛屿数量一致，深度优先遍历沉没 
var countBattleships = function(board) {
    function dfs(row, col){
        if(row < 0 || row > board.length-1 || col < 0 || col > board[0].length-1){
            return ;
        }
        if(board[row][col] === 'X'){
            board[row][col] = '.'
            dfs(row-1, col)
            dfs(row+1, col)
            dfs(row, col-1)
            dfs(row, col+1)
        }
    }

    let result = 0
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 'X'){
                result++
                dfs(i, j)
            }
        }
    }
    return result
};
```



### [445. 两数相加 II](https://leetcode-cn.com/problems/add-two-numbers-ii/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const stack1 = []
    const stack2 = []
    while(l1 !== null){
        stack1.push(l1.val)
        l1 = l1.next
    }
    while(l2 !== null){
        stack2.push(l2.val)
        l2 = l2.next
    }
    let cur = null
    let carry = 0
    while(stack1.length !== 0|| stack2.length !== 0){
        let sum = 0
        if(stack1.length !== 0){
            sum += stack1.pop()
        }
        if(stack2.length !== 0){
            sum += stack2.pop()
        }
        sum += carry
        const node = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)
        node.next = cur
        cur = node
    }
    if(carry !== 0){
        const node = new ListNode(carry)
        node.next = cur 
        cur = node
    }
    return cur
};
```



### [509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)

```js
/**
 * @param {number} n
 * @return {number}
 */
// 递归的方式，从上往下推，计算每一个值都需要递归，时间复杂度高
var fib = function(n) {
    if(n <= 1){
        return n
    }
    return fib(n-1) + fib(n-2)
};

// 方法二： 记忆化数组存储递归的值，等下次再需要这个值的时候如果存在则不需要递归了，时间复杂度大大降低
var fib = function(n) {
    if(n <= 1){
        return n
    }
    const result = []
    result[0] = 0
    result[1] = 1
    function memoize(num){
        if(result[num] !== undefined){
            return result[num]
        }
        return memoize(num-1) +  (num-2)
    }
    return memoize(n)
};
 
// 方法三：从下往上算，不过空间复杂度为On
var fib = function(n) {
    if(n <= 1) {
        return n
    }
    const result = [0, 1]
    for(let i = 2; i <= n; i++){
        result[i] = result[i-1] + result[i-2]
    }
    return result[n]
};

// 方法三改进：用两个变量存储即可 
var fib = function(n) {
    if(n <= 1) {
        return n
    }
    let pre2 = 0
    let pre1 = 1
    let result = 0
    for(let i = 2; i <= n; i++){
        result = pre2 + pre1
        pre2 = pre1
        pre1 = result
    }
    return result
};
```



### [680. 验证回文字符串 Ⅱ](https://leetcode-cn.com/problems/valid-palindrome-ii/)

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function isPalindrome(left, right){ // 判断回文的函数
        while(left < right){
            if(s[left] !== s[right]){
                return false
            }
            left++
            right--
        }
        return true
    }
    let left = 0
    let right = s.length - 1
    while(left < right){
        if(s[left] !== s[right]){
            return (isPalindrome(left + 1, right) || isPalindrome(left, right - 1))
        }
        left++
        right--
    }
    return true
};
```



### [695. 岛屿的最大面积](https://leetcode-cn.com/problems/max-area-of-island/)

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let result = 0
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col]){
                let count = dfs(row, col)
                result = Math.max(result, count)
            }
        }
    }

    function dfs(row, col){
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0){
            return 0
        }

        let count = 1
        grid[row][col] = 0
        count += dfs(row-1, col)
        count += dfs(row+1, col)
        count += dfs(row, col-1)
        count += dfs(row, col+1)
        return count
    }

    return result
};
```



### [704. 二分查找](https://leetcode-cn.com/problems/binary-search/)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2)
        if(nums[mid] === target){
            return mid
        }
        if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return -1
};
```



### [733. 图像渲染](https://leetcode-cn.com/problems/flood-fill/)

```js
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    function dfs(row, col){
        if(row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== nowColor){
            return false
        }
        if(image[row][col] === nowColor){
            image[row][col] = newColor
        }
        dfs(row-1, col)
        dfs(row+1, col)
        dfs(row, col-1)
        dfs(row, col+1)
    }
    // 当选择的颜色与当前的颜色相同时，直接返回image，少这一步会导致死循环
    if(image[sr][sc] === newColor){ 
        return image
    }
    let nowColor = image[sr][sc]
    dfs(sr,sc)
    return image
};
```



### [796. 旋转字符串](https://leetcode-cn.com/problems/rotate-string/)

```js
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

// 将第一个放到最后一个位置，循环n次
var rotateString = function(s, goal) {
    s = s.split('')
    for(let i = 0; i < s.length; i++){
        s.push(s.shift())
        if(s.join('') === goal){
            return true
        }
    }
    return false
};

// 进阶版，再拼接一份，然后所有的反转的结果都会包含在这个拼接后的字符串内
var rotateString = function(s, goal) {
    if(s.length !== goal.length){
        return false
    }
    s += s
    return s.includes(goal)
};
```



### [836. 矩形重叠](https://leetcode-cn.com/problems/rectangle-overlap/)

```js
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    if(rec1[1] >= rec2[3] || rec1[3] <= rec2[1] || rec1[2] <= rec2[0] || rec1[0] >= rec2[2]){
        return false
    }else{
        return true
    }
};
```



### [844. 比较含退格的字符串](https://leetcode-cn.com/problems/backspace-string-compare/)

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let backspaceS = 0
    let backspaceT = 0
    let i = s.length - 1
    let j = t.length - 1
    while(i >= 0 || j >= 0){
        while(i >= 0){
            if(s[i] === '#'){ // 当遇到退格符号，存储个数
                backspaceS++
                i--
            }else if(backspaceS > 0){ // 当非退格符时检查是否存储有退格符，如果有则指针往前移
                backspaceS--
                i--
            }else{  // 都不是的话退出比较当前值和另一个的值是否相同
                break
            }
        }
        while(j >= 0){
            if(t[j] === '#'){
                backspaceT++
                j--
            }else if(backspaceT > 0){
                backspaceT--
                j--
            }else{
                break
            }
        }
        if(s[i] !== t[j]){
            return false
        }
        i--
        j--
    }
    return true
};

```



# nowcode

### [**快速排序**quickSort](https://www.nowcoder.com/practice/38da660199d0400580ac3905c05f5bd6?tpId=274&&tqId=39524&rp=1&ru=/activity/oj&qru=/ta/front-interview-hand/question-ranking)

```js
const _quickSort = array => {
                // 补全代码
                if(array.length <= 1){ // 终止条件
                    return array
                }
                let midIndex = Math.floor(array.length / 2)
                let mid = array.splice(midIndex, 1)[0]
                let left = []
                let right = []
                for(let i = 0; i < array.length; i++){
                    if(array[i] < mid){
                        left.push(array[i])
                    }else{
                        right.push(array[i])
                    }
                }
                return _quickSort(left).concat(mid, _quickSort(right))
            }
```

