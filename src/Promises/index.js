// ESTO ES UNA PROMESA MUY BASICA QUE VA A RETORNAR UN 
// VALOR TRUE

const promise = new Promise((res, rej) => {
    return ("hey!")
})



const cows = 14;

const countCows = new Promise((res, rej) => {
    if (cows > 15) {
        res(`we have ${cows} cows on the farm`)
    } else {
        rej("there is no cows on the farm")
    }
})

countCows
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
    .finally(() => console.log("finally finished counting"))