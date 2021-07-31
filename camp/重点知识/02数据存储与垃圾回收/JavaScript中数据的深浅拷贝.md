### JavaScript中数据的深浅拷贝

> 在讲深浅拷贝之前我们先要明白javascript中数据的赋值是如何存储的，接下来再介绍深浅拷贝的方法。

**赋值**：简单数据类型直接在栈中开辟一块新的内存，存储赋值的数据；引用数据类型，在栈中开辟一块空间，存储赋值的数据对应的堆中的存储地址，源数据和拷贝的新数据对应的是同一块堆空间中的数据

**浅拷贝**：堆栈各开辟一块新空间，栈中存储堆中新开辟的空间的地址，堆中赋值了源数据的数据，如果值是基本数据类型那么新数据和源数据没有任何关系，如果值是引用数据类型那么新数据的值指向的源数据的数据存储地址

**深拷贝**：堆栈各开辟一块新空间，栈中存储堆中新开辟的空间的地址，堆中存储的数据和源数据一样，但是二者没有任何联系

### 浅拷贝方法

##### 1.Object.assign()

Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。

```javascript
let obj1 = {
    person: {
        name: 'zs',
        age: 19
    },
    play: 'football'
}

let obj2 = Object.assign(obj1)
obj1.person.name = 'ls'
console.log(obj2)   //{ person: { name: 'ls', age: 19 }, play: 'football' }
```



##### 2.函数库lodash的_.clone方法

该函数库也有提供_.clone用来做 Shallow Copy,后面我们会介绍利用这个库实现深拷贝。

```javascript
let _ = require('lodash')

let obj1 = {
    person: {
        name: 'zs',
        age: 19
    },
    play: 'football'
}

let obj2 = _.clone(obj1)
obj1.person.name = 'ls'

console.log(obj2)  //{ person: { name: 'ls', age: 19 }, play: 'football' }
```



##### 3.展开运算符...

展开运算符是一个 es6 / es2015特性，它提供了一种非常方便的方式来执行浅拷贝，这与 Object.assign ()的功能相同。

```javascript
let obj1 = { name: 'zs', address: { x: 100, y: 100 } }
let obj2 = { ...obj1 }
obj1.address.x = 200;
obj1.name = 'lisi'
console.log('obj2', obj2)   //obj2 { name: 'zs', address: { x: 200, y: 100 } }
```



##### 4.Array.prototype.concat()

```javascript
let arr1 = [123, 'jh', {
    name: 'zs',
    age: 19
}]

let arr2 = arr1.concat()
arr1[1] = 'asf'
arr1[2].age = 20
console.log(arr2)  //[ 123, 'jh', { name: 'zs', age: 20 } ]
```



##### 5.Array.prototype.slice()

```javascript
let arr1 = [123, 'jh', {
    name: 'zs',
    age: 19
}]

let arr2 = arr1.slice()
arr1[1] = 'asf'
arr1[2].age = 20
console.log(arr2) //[ 123, 'jh', { name: 'zs', age: 20 } ]
```



### 深拷贝方法

##### 1.JSON.parse(JSON.stringify())

利用JSON.stringify将对象转成JSON字符串，再用JSON.parse把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝。

```javascript
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
```



##### 2.函数库lodash的_.cloneDeep方法

该函数库也有提供_.cloneDeep用来做 Deep Copy

```javascript
let _ = require('lodash')
let obj1 = {
    a: 1,
    b: { f: { g: 1 } }
}

let obj2 = _.cloneDeep(obj1)
console.log(obj1.b === obj2.b) //false
console.log(obj1 === obj2) // false
```



##### 3.jQuery.extend()方法

jquery 有提供一個`$.extend`可以用来做 Deep Copy

```javascript
// $.extend(deepCopy, target, object1, [objectN])//第一个参数为true,就是深拷贝
var $ = require('jquery');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f); // false
```



##### 4.手写递归方法

递归方法实现深度克隆原理：**遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝**。

有种特殊情况需注意就是对象存在**循环引用**的情况，即对象的属性直接的引用了自身的情况，解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。

```javascript
function deepClone(obj, hash = new WeakMap) {
    if (obj === null) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== 'object') return obj; // 除了对象外直接拷贝
    if (hash.get(obj)) return hash.get(obj); // 将引用存储起来，避免循环引用，存在则不再拷贝
    let cloneObj = new obj.constructor();    // 原型的constructor指向当前类本身
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj
}

let obj = { name: 'zs', age: 18, address: { short: 'guangdong' } }
obj.o = obj  // 对象存在循环引用的情况
let obj2 = deepClone(obj)
obj.address.short = 'beijing'
console.log(obj2)
```

**循环引用**：

当对象 1 中的某个属性指向对象 2，对象 2 中的某个属性指向对象 1 就会出现循环引用，（当然不止这一种情况，不过原理是一样的）

