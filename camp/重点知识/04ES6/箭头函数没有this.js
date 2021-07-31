// let obj = {
//     title: 'agul',
//     arr: [1, 2, 3],
//     say: function () {
//         this.arr.forEach(function (val) {
//             console.log(this.title, val);
//         })
//     }
// }
let obj = {
    title: 'agul',
    arr: [1, 2, 3],
    say: function () {
        this.arr.forEach((val) => {
            console.log(this.title, val);
        })
    }
}

obj.say()