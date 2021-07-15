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