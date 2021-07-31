function forRegExp(reg) {
    return function (text) {
        return reg.test(text)
    }
}

var forEmail = forRegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)

console.log(forEmail('agulagul@163。。.com')) //false