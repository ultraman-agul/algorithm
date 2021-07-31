// 1.
// const fruit = ['🍌', '🍊', '🍎']

// fruit.slice(0, 1) // 不会改变原数组
// fruit.splice(0, 1)
// fruit.unshift('🍇')

// console.log(fruit) // [ '🍇', '🍊', '🍎' ] 

// 2.
// const groceries = ["banana", "apple", "peanuts"];

// if (groceries.indexOf("banana")) {
//     console.log("We have to buy bananas!");
// } else {
//     console.log(`We don't have to buy bananas!`);
// }
// We don't have to buy bananas!


// // 3.下面哪些代码修改了原数组
// const emojis = ['✨', '🥑', '😍']

// emojis.map(x => x + '✨')       //0      创建一个新数组，存储调用函数之后的返回值
// emojis.filter(x => x !== '🥑')  //0      创建一个新数组，满足所有条件的值
// emojis.find(x => x !== '🥑')    //0      返回第一个满足条件的值
// emojis.reduce((acc, cur) => acc + '✨') //0 对数组中的每个元素执行一个提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// emojis.slice(1, 2, '✨')        //0     创建一个新的数组，存储截取数组的值
// emojis.splice(1, 2, '✨')       //1     通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

// 4.
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
//报错 push返回值是数组长度