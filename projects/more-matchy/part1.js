//Use this file to implement Part One of your project

var animal;

//test animal
animal = { 
	species: 'duck',
	tagline: 'Afflac',
	noises: ['quack', 'honk', 'sneeze', 'growl']
};

//objKeyPrinter loops through the properties of any object and returns a string of all the keys.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// example output: "species tagline noises"

function objKeyPrinter(object){
	var result = "";
	for (var key in object) {
		result += key + " ";
	}
	return result;
}


// objValuePrinter loops through all the properties in a given object and returns a string of all the values that are strings.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// example output: "duck Afflac"

function objValuePrinter(object){

}

// arrValuePrinter takes a given array and returns the values as a string
// example input: ['quack', 'honk', 'sneeze', 'growl']
// example output: "quack honk sneeze growl"
function arrValuePrinter(array) {

}

// dataTypeChecker takes either an array or an object and returns either 'array' or 'object' as appropriate.
// example input: ['quack', 'honk', 'sneeze', 'growl']
// example output: "array"
// example input: {}
// example output: "object"
function dataTypeChecker (collection) {

}

// capitalizeVals takes an object, capitalizes the first letter of each string value in the object, and returns the object. Ignore any non-string values like arrays, numbers or objects.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// example output: { species: 'Duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
function capitalizeVals (object) {

}

// strCapitalizer takes a string, capitalizes the first letter of each word, and returns the string.
// example input: "my name is bristol"
// example output: "My Name Is Bristol"
function strCapitalizer(string){

}

// unique takes an array, removes any duplicate values and returns the array.
// input: [1,2,3,3,4]
// output: [1,2,3,4]
function unique(array) {

}

// extend takes two objects and copies the properties of the first object on to the second. It does not return anything.
function extend (object1, object2) {
	
}


