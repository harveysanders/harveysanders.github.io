//Use this file to implement Part One of your project

var animal;

//objKeyPrinter loops through the properties of any object and returns a string of all the keys.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// example output: "species tagline noises"

function objKeyPrinter(object){
	for (var key in object) {
		return key;
	}
}