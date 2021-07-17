// 1.哪个会报错
// const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

// /* 1 */ emojis.push("🦌");
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, "🥂"];  // 报错，const是常量，不能重复赋值
// /* 4 */ emojis.length = 0;
// console.log(emojis) // []


// 2.
// const add = x => x + x;

// function myFunc(num = 2, value = add(num)) {
//     console.log(num, value);
// }

// myFunc(); //2 4
// myFunc(3);//3 6

// 3.
// const randomValue = 21;

// function getInfo() {
//     console.log(typeof randomValue);
//     const randomValue = "Lydia Hallie";
// }

// getInfo();
// // 报错，暂时性死区

// 4.
// const spookyItems = ["👻", "🎃", "🕸"];
// ({ item: spookyItems[3] } = { item: "💀" });

// console.log(spookyItems);  //[ '👻', '🎃', '🕸' , '💀' ]  解构赋值运算符

// 5.
// const myFunc = ({ x, y, z }) => {
//     console.log(x, y, z);
// };

// myFunc(1, 2, 3); //undefined undefined undefined
// myFunc({ x: 23, y: 'as' }) //23 as undefined

// 6.
// const myFunc = ({ x, y, z }) => {
//     console.log(x, y, z);
// };
// myFunc(1, 2, 3);

// 7.
// function sumValues(x, y, z) {
//     return x + y + z;
// }

// let result = sumValues(...[1, 2, 3])
// console.log(result)

// 8.
// const person = {
//     name: "Lydia",
//     age: 21
// }

// const changeAge = (x = { ...person }) => x.age += 1
// const changeAgeAndName = (x = { ...person }) => {
//     x.age += 1
//     x.name = "Sarah"
// }

// changeAge(person)  
// changeAgeAndName() 
// console.log(person)

// changeAge(person)会改变入参的值，
// changeAgeAndName()方法没有入参，就会进行解构赋值，解构赋值不会改变原有的对象，但是操作的都是person对象


// 9.
// const name = "Lydia";
// age = 21;

// console.log(delete name);  // false
// console.log(delete age);  // true
//使用了 const ，它会标记为不可配置， let 或var 也是不可配置的，不可删除。

// 10.
// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set); // Set(4) { 1, 2, 3, 4 }
// console.log(Array.from(set)) // [ 1, 2, 3, 4 ]

// 11.
// function sayHi() {
//     console.log(name)
//     console.log(age)
//     var name = 'Lydia'
//     let age = 21
// }

// sayHi() // undefined 和报错Cannot access 'age' before initialization

// 12.
const randomValue = 21;

function getInfo() {
    console.log(typeof randomValue);
    const randomValue = "Lydia Hallie";
}

getInfo(); // 报错

// 中序遍历为[5, 4, 1, 2, 3, 6]
// 后序遍历为[4, 5, 2, 6, 3, 1]
// 先序遍历为[1,5,4,3,2,6]