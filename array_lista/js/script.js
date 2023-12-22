/*Creo lista frutta*/

const basketFruit = [
    'banana', 
    'mela', 
    'pera', 
    'ciliegia', 
    'arancia', 
    'mandarino', 
    'cocomero', 
    'limone', 
    'fragola'
]



/**Aggiungo la pesca alla lista */

basketFruit.push('pesca')

console.log(basketFruit)

let message = ''

const cocktailFruit = 'cocomero';

// crreo Flag

let isThere = false

// Creo ciclo for per controllare se ho l'ingrediente nella lista

for (let i = 0; i<= basketFruit.length && !isThere; i++){
    if (cocktailFruit === basketFruit[i]){
        isThere = true
    }
}

//Assegno il testo al messaggio

if (isThere){
    message += 'Trovato! Devo solo preparare il cocktail.'
} else {
    message += 'Oh no, devo uscire a comprare il cocomero!'
}

//Stampo messaggio in console

console.log(message)

