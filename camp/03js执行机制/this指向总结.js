// 嵌套函数中的 this 不会继承外层函数的 this 值。
// var myObj = {
//     name: "agul",
//     showThis: function () {
//         console.log(this); // myObj
//         var bar = function () {
//             this.name = "pjh";
//             console.log(this) // window
//         }
//         bar();
//     }
// };
// myObj.showThis();
// console.log(myObj.name);
// console.log(window.name);

// 解决方法1：使用箭头函数
// var myObj = {
//     name: "agul",
//     showThis: function () {
//         console.log(this); // myObj
//         var bar = () => {
//             this.name = "pjh";
//             console.log(this)
//         }
//         bar();
//     }
// };
// myObj.showThis();
// console.log(myObj.name);
// console.log(window.name);

// 解决方法2：使用变量存储this，利用作用域链实现继承
var myObj = {
    name: "agul",
    showThis: function () {
        console.log(this); // myObj
        var self = this
        var bar = function () {
            self.name = "pjh";
            console.log(self)
        }
        bar();
    }
};
myObj.showThis();
console.log(myObj.name);