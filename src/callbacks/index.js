function sum(sum1, sum2) {
    return sum1 + sum2
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(
    calc(100, 200, sum)
);

function gretting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(gretting, 2000, "Juan");