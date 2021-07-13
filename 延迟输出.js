function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
            console.log(1)
        }, ms);
    })
}

async function test() {
    console.log('start')
    await sleep(2000)
    console.log('end')
}

test()