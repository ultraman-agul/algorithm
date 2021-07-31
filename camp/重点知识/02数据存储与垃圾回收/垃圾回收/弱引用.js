// 在ie下运行生效，由于谷歌内部有自己的优化算法，所以演示不出来
// var map = new Map();
// {
//     let x = {}
//     map.set(x, 'something');

// }
// console.log(map);


var map = new WeakMap();
{
    let x = {}
    map.set(x, 'something');
}  //只要所引用的对象没有其他的引用了，垃圾回收机制就会释放该对象所占用的内存。
console.log(map);