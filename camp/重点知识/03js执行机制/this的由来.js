// 对象中的方法需要访问对象中的变量时，需要使用this关键字
// var bar = {
//     myName: "agul",
//     printName: function () { console.log(this.myName) }
//     // printName: function () { console.log(myName) }
// }
// let myName = 'pjh';
// bar.printName(); // 'agul'

// 严格模式下this为undefined，非严格为window
function foo() {
    // 'use strict';
    console.log(this)
};
foo() // window
