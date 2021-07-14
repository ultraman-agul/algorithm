// setTimeout(() => {
//     console.log(123)
// }, 1000)

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(456)
//     }, 1000)
// }).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })

// async function sleep() {
//     await p1
//     await p2
// }

var p1 = () => new Promise(res => {
    setTimeout(() => {
        console.log('p1' + 2000)
        res()
    }, 2000)
})

var p2 = () => new Promise(res => {
    setTimeout(() => {
        res()
        console.log('p2' + 1000)
    }, 1000)
})

var p3 = new Promise(res => {
    res()
})

// p3.then(p1).then(p2)
async function f1() {
    await p1()
    await p2()
}
f1()