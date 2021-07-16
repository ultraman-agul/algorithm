
function fn1(a, b) {
    console.log(a + b + this.c)
}

obj = {
    c: 3
}
//call
// fn1.call(obj, 1, 2)

// apply
// fn1.apply(obj, [1, 2])

//bind  返回是函数，需要调用才执行
fn1.bind(obj, 1, 2)()