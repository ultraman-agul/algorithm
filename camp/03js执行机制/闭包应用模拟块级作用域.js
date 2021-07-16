for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j)
        }, j * 1000)
    })(i)
}


//相当于
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}