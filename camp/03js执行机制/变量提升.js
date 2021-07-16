// console.log(myName)  // undefined
// var myName = 'agul'
// 相当于
// var myName = undefined
// console.log(myName)
// myName = 'agul'

// function eat() {
//     console.log('eat rice')
// }
// eat()
// function eat() {
//     console.log('eat meat')
// }
// eat()
// // 相当于
// function eat() {
//     console.log('eat rice')
// }
// function eat() {
//     console.log('eat meat')
// }
// eat()
// eat()

// showName()
// var showName = function () {
//     console.log(2)
// }
// function showName() {
//     console.log(1)
// }
// showName()
// 相当于
// function showName() {
//     console.log(1)
// }
// var showName // 这里没有初始值，所以不会对原来的变量有任何影响
// showName()
// showName = function () {
//     console.log(2)
// }
// showName()

// var showName = 1;
// showName()
// var showName = function () { console.log(2) }
// function showName() { console.log(1) }
// 相当于
// function showName() { console.log(1) }
// var showName = undefined
// showName = 1
// showName() // 因为这里showName为1，不是一个函数，所以报错
// showName = function () { console.log(2) }

var a = 100;
function fn() {
    console.log(a);   //undefined
    var a = 200;
    console.log(a);   //200
}
fn();
console.log(a);   //100
var a;
console.log(a);    //100
var a = 300;
console.log(a);   //300

// 相当于
// function fn() {
//     console.log(a);   //undefined
//     var a = 200;
//     console.log(a);   //200
// }
// var a = undefined
// a = 100
// fn();
// console.log(a); // 100
// console.log(a); // 100
// a = 300
// console.log(a); // 300