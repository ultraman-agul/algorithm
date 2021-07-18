// 将数组 arr 中的元素作为调用函数 fn 的参数

function argsAsArray(fn, arr) {
    // return fn(...arr)
    // return fn.call(this, ...arr)
    // return fn.apply(this, arr)
    return fn.bind(this, ...arr)()
}

argsAsArray(function (greeting, name, punctuation) { console.log(greeting + ', ' + name + (punctuation || '!')); }, ['Hello', 'Ellie', '!'])