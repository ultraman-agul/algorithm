function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    if (typeof obj !== 'object') return obj
    if (hash.get(obj)) return hash.get(obj)
    let cloneObj = new obj.constructor()
    hash.set(obj, cloneObj)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash)
        }
    }
    return cloneObj
}

let obj = { name: 'zs', age: 18, address: { short: 'guangdong' } }
obj.o = obj  // 对象存在循环引用的情况
let obj2 = deepClone(obj)
obj.address.short = 'beijing'
console.log(obj2)