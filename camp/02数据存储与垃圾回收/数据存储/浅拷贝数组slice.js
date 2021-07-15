let arr1 = [123, 'jh', {
    name: 'zs',
    age: 19
}]

let arr2 = arr1.slice()
arr1[1] = 'asf'
arr1[2].age = 20
console.log(arr2) //[ 123, 'jh', { name: 'zs', age: 20 } ]