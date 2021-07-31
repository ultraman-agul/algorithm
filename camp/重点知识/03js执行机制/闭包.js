function myName() {
    let test1 = 1
    let test2 = 2
    let name = 'agul'
    let foo = {
        getName: function () {
            return name
        },
        setName: function (value) {
            name = value
            console.log(test1)
        }
    }
    return foo
}

let bar = myName()
bar.setName('pjh')
console.log(bar.getName())
// 函数中的name,test1不会被垃圾回收机制回收,直到页面关闭
