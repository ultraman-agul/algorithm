let obj1 = { name: 'zs', address: { x: 100, y: 100 } }
let obj2 = { ...obj1 }
obj1.address.x = 200;
obj1.name = 'lisi'
console.log('obj2', obj2)   //obj2 { name: 'zs', address: { x: 200, y: 100 } }
