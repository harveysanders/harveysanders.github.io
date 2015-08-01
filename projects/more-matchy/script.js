//Use this file to implement Part One of your project

var animal,
	animals,
	animalsFromJSON,
	friends,
	relationships,
	matches
	;

//test animal

//test Data
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open('get', 'data/animals.json', true);
oReq.send();

function reqListener(e) {
	animalsFromJSON = JSON.parse(this.responseText);
}


animals = animalsFromJSON;

// --------------------------------------------------------

// ---------------- Scenario 0: General Helper Functions ------------------
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
		result += array[i] + " ";
	}return result;
}

// dataTypeChecker takes either an array or an object and returns either 'array' or 'object' as appropriate.
// example input: ['quack', 'honk', 'sneeze', 'growl']
// example output: "array"
// example input: {}
// example output: "object"
function dataTypeChecker (collection) {
	//check for array FIRST because they also return true if tested as objects
	return Array.isArray(collection) ? "array" : typeof collection === 'object' ? 'object' : 'input is neither object or array';

	// if (Array.isArray(collection)) {  
	// 	return "array";
	// }
	// else if (typeof collection === 'object'){
	// 	return "object";
	// } else {
	// 	return 'input is neither object or array';
	// }

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

//Addtional Helper Functions

function getAnimalName(animal) {
	return animal.name;
}

// ---------------- Scenario 1: Animal Profile Page ----------------------
function welcomeMessage (animal) {
	return "Welcome, " + strCapitalizer(getAnimalName(animal)) + "!";
}

function profileData (animal) {
	return 	'Species: ' + strCapitalizer(animal.name) + 
			', Tagline: ' + strCapitalizer(animal.tagline) + 
			', Noises: ' + arrValuePrinter(animal.noises);
}

//---------------- 1b ----------
function relationshipLogger(animal) {
	if (animal.relationships) {
		return animal.relationships;
	}return "You have no relationships :(";
}

//function that takes two parameters, the species name and an animal object. The function returns the relationship between the species and animal.
function findRelationship(name, animal) {
	var friends = animal.relationships.friends;
	var matches = animal.relationships.matches;
	
	for (var i=0; i<friends.length; i++) {
		if (name === friends[i]) {
			return strCapitalizer(friends[i]) + " is a friend of " + strCapitalizer(animal.name);
		}
	}for (i=0; i<matches.length; i++) {
		if (name === matches[i]) {
			return strCapitalizer(matches[i]) + " is a match for " + strCapitalizer(animal.name);
		} 
	}return strCapitalizer(animal.name) + " and " + strCapitalizer(name) + " have no relationship yet.";	
}

function addFriend(friendName, animal) {
	animal.relationships.friends.push(friendName);
}

function addMatch(matchName, animal) {
	animal.relationships.matches.push(matchName);
}

// ---------------- Scenario 2: Browse Animals Page ----------------------
function nonFriends(user, animals) {
	var self = user.name;
	var userFriends = user.relationships.friends;
	var result = [];

	for (var animalIndex=0; animalIndex<animals.length; animalIndex++) {
		for (var i=0; i<userFriends.length; i++) {
			if (animals[animalIndex].name !== self && userFriends[i] !== animals[animalIndex].name) {
				result.push(animals[animalIndex].name);
			}
		}
	}return unique(result);
}

// ---------------- Scenario 3: Search and Add Friend ----------------------
function search(query, collection) {
	var results = [];
	for (var i=0; i<collection.length; i++) {
		for (var item in collection[i]) {
			if (query === item || query === collection[i][item]) {
				results.push(collection[i]);
			}
		}
	} return results;
}

//Extra credit: How can you make this work with any type of nested data structure? Assuming we might want to change the structure of our data in the future and won't want it to break our code.

// ---------------- Scenario 4: Edit Animal Profile Page -----------------
function editAnimal(animal, key, newVal) {
	for (var prop in animal) {
		newVal = key === prop ? animal[prop] : animal[key];

		// if (key === prop) {
		// 	animal[prop] = newVal; 
		// }else {
		// 	animal[key] = newVal;
		// }
	}

}

// ---------------- Scenario 5: Edit Animal Collection Data----------------

function createAnimal(name, tagline, noises, friends, matches) {
	var animal = {
		name: name,
		tagline: tagline || "",
		noises: noises || [],
		friends: friends || {},
		matches: matches || {}
	};
	animals.push(animal);
}

function cleanseData(collection, keyNames) {
	//You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object.
	var args = [];
	var result = [];
	
	//make new array from arguments objects, leaving out first element. 
	//The first argument is assumed to be the collection array. 
	//'keyNames' is for user API purposes only.
	for (var i=1; i<arguments.length; i++) {
		args.push(arguments[i]);
	}
	/*
	1. loop through args array
	2. loop through animals array
	3. delete keys
	*/
	for (var o=0; o<args.length; o++) {
		for (var idx=0; idx<collection.length; idx++) {
			//delete collection[idx][args[o]];
			result.push(collection[idx][args[o]]);
		}
	}
	console.log(result); //crap. this is the opposite of what i want.
	return collection;
}




























