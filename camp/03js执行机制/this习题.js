// const object = {
//     who: 'World',

//     greet() {
//         return `Hello, ${this.who}!`;
//     },

//     farewell: () => {  // 箭头函数this指向父级的执行上下文
//         console.log(this)
//         return `Goodbye, ${this.who}!`;
//     }
// };

// console.log(object.greet());    // What is logged?
// console.log(object.farewell()); // What is logged?


// var length = 4;
// function callback() {
//     console.log(this.length); // What is logged?
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     }
// };

// object.method(callback, 1, 2);


// var length = 4;
// function callback() {
//     console.log(this.length); // What is logged?
// }

// const object = {
//     length: 5,
//     method() {
//         arguments[0]();
//     }
// };

// object.method(callback, 1, 2);

const user = {
    email: "asd",
    updateEmail: email => {
        this.email = email
    }
}

user.updateEmail("")
console.log(user.email)