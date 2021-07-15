let obj1 = {
    person: {
        name: 'zs',
        age: 19
    },
    play: 'football'
}

let obj2 = Object.assign(obj1)
obj1.person.name = 'ls'
console.log(obj2)   //{ person: { name: 'ls', age: 19 }, play: 'football' }