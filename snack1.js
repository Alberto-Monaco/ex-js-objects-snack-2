//? Code Question 1
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

const hamburger = { name: 'Cheese Burger', weight: 250 }
const secondBurger = hamburger
secondBurger.name = 'Double Cheese Burger'
secondBurger.weight = 500

console.log(hamburger.name) // ?
console.log(secondBurger.name) // ?
