//Use this file to implement Part One of your project

var animal,
	testObj
	;

//test animal
animal = { 
	species: 'duck',
	tagline: 'Afflac',
	noises: ['quack', 'honk', 'sneeze', 'growl']
};

testObj = {
	str: 'bacbajfd',
	num: 43
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
	var result = "";
	for (var key in object) {
		if (typeof object[key] === 'string') {
			result += object[key] + " ";
		}
	} return result;
}

// arrValuePrinter takes a given array and returns the values as a string
// example input: ['quack', 'honk', 'sneeze', 'growl']
// example output: "quack honk sneeze growl"
function arrValuePrinter(array) {
	var result = "";
	for (var i=0; i<array.length; i++) {
		result += array[i] + "";
	}return result;
}

// dataTypeChecker takes either an array or an object and returns either 'array' or 'object' as appropriate.
// example input: ['quack', 'honk', 'sneeze', 'growl']
// example output: "array"
// example input: {}
// example output: "object"
function dataTypeChecker (collection) {
	//check for array FIRST because they also return true if tested as objects
	if (Array.isArray(collection)) {  
		return "array";
	}
	else if (typeof collection === 'object'){
		return "object";
	} else {
		return 'input is neither object or array';
	}
}

// capitalizeVals takes an object, capitalizes the first letter of each string value in the object, and returns the object. Ignore any non-string values like arrays, numbers or objects.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// example output: { species: 'Duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
function capitalizeVals (object) {
	var result = "";
	for (var key in object) {
		if (typeof object[key] === 'string') {
			//var val = object[key];
			//cappedStr = val.charAt(0).toUpperCase() + val.substring(1);
			result += strCapitalizer(object[key]) + " ";
		}
	} return result;
}

// strCapitalizer takes a string, capitalizes the first letter of each word, and returns the string.
// example input: "my name is bristol"
// example output: "My Name Is Bristol"
function strCapitalizer(string){
	return string.charAt(0).toUpperCase() + string.substring(1);
}

// unique takes an array, removes any duplicate values and returns the array.
// input: [1,2,3,3,4]
// output: [1,2,3,4]
function unique(array) {
	var result = [];
	for (var i=0; i<array.length; i++){
		if (result.indexOf(array[i]) === -1) {
			result.push(array[i]);
		}
	}return result;
}

// extend takes two objects and copies the properties of the first object on to the second. It does not return anything.
function extend (copyFrom, pasteTo) {
	for (var prop in copyFrom) {
		pasteTo[prop] = copyFrom[prop]; //use array syntax to dynamically add property names!
	}
}


