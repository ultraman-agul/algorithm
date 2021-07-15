let arr = [1, 3, {
    username: 'agul'
}];
let arr1 = JSON.parse(JSON.stringify(arr))
arr[2].username = 'pjh';
console.log(arr, arr1)  // [ 1, 3, { username: 'pjh' } ] [ 1, 3, { username: 'agul' } ]
let obj1 = {
    a: 1,
    b: { f: { g: 1 } }
}
let obj2 = JSON.parse(JSON.stringify(obj1))
obj1.b.f.g = 2
console.log(obj1, obj2) //{ a: 1, b: { f: { g: 2 } } } { a: 1, b: { f: { g: 1 } } }
//可以实现数组或对象深拷贝,但不能处理函数和正则