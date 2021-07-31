function f1(name) {
    this.name = name
}

let f2 = (val) => { this.age = val }

let per1 = new f1('zs')
let per2 = new f2() // f2 is not a constructor