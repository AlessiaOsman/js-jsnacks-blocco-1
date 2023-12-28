/*const numberElements = parseInt(prompt('Quanti numeri vuoi stampare?'))

console.log(numberElements)

const numbers = []



let randomNumber = Math.floor(random * 100) + 1

for (let i = 0; i < numberElements.length; i++ ){
    numbers.push (randomNumber)
    console.log(numbers)
}

console.log(numbers)*/


const numOfElements = parseInt(prompt("Quanti numeri vuoi inserire?"));

const numbers = [];

const max = 100

const min = 1

for (let i = 0; i < numOfElements; i++) {
    const random = Math.random()
    let randomNumber = Math.floor(random * (max + 1 - min)) + min    
    numbers.push(randomNumber);
}

console.log(numbers)

console.log(numbers.slice(-5));