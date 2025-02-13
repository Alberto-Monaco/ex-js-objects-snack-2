//? Code Question 4
// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

const chef = {
	name: 'Chef Hyur',
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`)
	}
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false
}

const clonedChef = { ...chef }
const clonedRestaurant = structuredClone(restaurant)

console.log(clonedChef)
console.log(clonedRestaurant)

//? Risposta: per l'oggetto chef, il metodo migliore per clonare l'oggetto è utilizzare spread operator, poiché l'oggetto chef contiene solo proprietà di tipo primitivo e una funzione.
//? Per l'oggetto restaurant, il metodo migliore per clonare l'oggetto è utilizzare structuredclone, poiché l'oggetto restaurant contiene proprietà annidate e una data.
