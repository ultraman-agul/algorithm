// 描述
// 根据包名，在指定空间中创建对象
// 输入描述：
// namespace({ a: { test: 1, b: 2 } }, 'a.b.c.d')
// 输出描述：
// { a: { test: 1, b: { c: { d: { } } } } }
function namespace(oNamespace, sPackage) {
    let package = sPackage.split('.')
    let temp = oNamespace
    for (item of package) {
        console.log(item)
        if (typeof temp[item] === 'object') {
            console.log('this is object')
            temp = temp[item]
            continue
        }
        temp[item] = {}
        temp = temp[item]
    }
    return oNamespace
}

var a = {};
var r = namespace({ a: { a: 1 } }, 'a.b.c.d.e.f.g');
console.log(r)
// a.a.b.c.d.e.f.g = 1;
// return a.a.b.c.d.e.f.g === 1; 