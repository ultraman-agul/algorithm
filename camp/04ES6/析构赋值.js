// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

// let { foo, bar } = { foo: 'foo132', bar: 'bar4535' }
// console.log(foo, bar)

// 嵌套
// 数组
// let [a, [[b], c]] = [1, [[2], 3]];

// console.log(a);
// console.log(b);
// console.log(c);

// // 对象
// let obj = { p: ['hello', { y: 'world' }] };
// let { p: [x, { y }] } = obj;
// console.log(x);
// console.log(y);

// 忽略
// 数组
// let [a, , b] = [1, 2, 3];
// console.log(a);
// console.log(b);

// // 对象
// let obj = { p: ['hello', { y: 'world' }] };
// let { p: [x, { }] } = obj;
// console.log(x);

// 不完全析构
// 数组
// let [a = 1, b] = [];
// console.log(a);
// console.log(b);

// // 对象
// let obj = { p: [{ y: 'world' }] };
// let { p: [{ y }, x] } = obj;
// console.log(x);
// console.log(y);


// 字符串
let [a, b, c, d, e] = 'hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);