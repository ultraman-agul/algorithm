var a = 1;
function sum(b, c) {
    return b + c
};
function addSum(d, e) {
    var f = 10;
    result = sum(d, e);
    return a + result + f
};
console.log(addSum(3, 6))  // 调用栈后入先出