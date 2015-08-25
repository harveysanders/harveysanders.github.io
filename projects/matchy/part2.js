//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.

//console.log(animals);

var profileAnimal = animals[3];
var loggedInUser = animals[0];

// 	1a ----- Log Personal Data ----------------------------------
var logPersonalData = function(profileAnimal){ 
	for (var prop in profileAnimal) {
		//if value is string
		var currVal = profileAnimal[prop];

		if (typeof currVal === 'string') {
			//print key and value
			console.log(prop + ': ' + currVal);
		} else if (Array.isArray(currVal)) {
			var elements = [];
			for (var i=0; i<currVal.length; i++) {
				elements.push(currVal[i]);
			}console.log(prop + ": " + elements.join(' '));
		} 
		else {
			//if not string, print key and value of 'click here for more data'
			console.log(prop + ': ' + 'click here for more data');
		}
	}
};

var animalFriends = profileAnimal.relationships.friends;
var animalFriendsNames = [];
for (i=0; i<animalFriends.length; i++) {
	 animalFriendsNames.push(animalFriends[i]);
}
console.log("Animal Friends: " + animalFriendsNames.join(','));

var deleteFriend = function(friend, friends){
	var index = friends.indexOf(friend);
	if (index > -1) {
		return friends.splice(index, 1)[0];
	}
};

//Scenario 2 ----------------
function logAllAnimals() {
	for (var i=0; i<animals.length; i++) {
		//log i.e.'1. Dog: Who Let the Dogs out?''
		console.log((i+1) + '. ' + animals[i].name + ': ' + animals[i].tagline);
	}
}

// Extra Credit --2b ------------ filter out friends of signed-in (first) animal 
//for each friend in user's friend list, check if animal name matches

/*
1. write a loop
2. write an if statement
	a. (myFriends = animals[0].friends)
	b. who they are = animals[i].name
	c. if animals[i].name !== animals[0].friends[i] 
	console.log(animals[i].species);
*/


function nonFriends(user, animals) {
	var self = user.name;
	var userFriends = user.relationships.friends;
	var result = [];

	for (var animalIndex=0; animalIndex<animals.length; animalIndex++) {
		for (var i=0; i<userFriends.length; i++) {
			if ((animals[animalIndex].name !== self) && (userFriends[i] !== animals[animalIndex].name)) {
				result.push(animals[animalIndex].name);
			}
		}
	}return unique(result);
}

//not friends callback function
function isFriend(user) {
	//loop through relationships.friends array and check if matches name from animals object
	var friends = user.relationships.friends;
	for(i=0; i<friends.length; i++){
		if (friends[i] === animals.name){ //gotta loop through animals somehow)
			return true;
		} 
	}
}

// Scenario 3 ----------------------------------------

var findAnimal = function(name) {
	for(i=0; i<animals.length; i++) {
		for (var key in animals[i]) {
			if (name === animals[i][key]){
				console.log('name found!');
				console.log(logPersonalData(animals[i]));
			}
		}
	}
};

//Add new friend??

//Scenario 4 -------------------------------------

var changeName = function(user, name) {
	user.name = name;
};

var changeNoises = function(user, noises) {
	user.noises = noises;
};

//Add new match to everyone
for (i=0; i<animals.length; i++) {
	//animals[i].relationships.matches.push("sarcophilus harrisii");
}
animals[0].relationships.matches.push('sarcophilus harrisii');
//4.5 change something else

//Scenario 5 ------------------

//reset all friendslists
var resetAllFriends = function() {
	animals[0].relationships.friends = [];
};





