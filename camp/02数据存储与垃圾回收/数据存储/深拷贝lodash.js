let _ = require('lodash')
let obj1 = {
    a: 1,
    b: { f: { g: 1 } }
}

let obj2 = _.cloneDeep(obj1)
console.log(obj1.b === obj2.b) //false
console.log(obj1 === obj2) // false