// 当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。
// let [a = 2] = [undefined];
// console.log(a);
// 对象
let { a = 10, b = 5 } = { a: 3 };
console.log(a);
console.log(b);