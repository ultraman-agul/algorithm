function speak(fn, obj) {
    //return fn.call(obj)
    //return fn.apply(obj)
    // return fn.bind(obj)()
    obj.fn = fn
    return obj.fn()
}