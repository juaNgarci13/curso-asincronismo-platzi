const fnAsync = () => {
    return new Promise((res, rej) => {
        (true)
            ? setTimeout(() => {
                res("Hello World")
            }, 3000)
            : rej("GoodBye World")
    })
}

const proveAsyncfn = async () => {
    console.log(await fnAsync());
}

proveAsyncfn();