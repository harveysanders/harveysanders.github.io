//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.

//console.log(animals);

var profileAnimal = animals[3];

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

//Scenario 2 ----------------

for (var i=0; i<animals.length; i++) {
	//log i.e.'1. Dog: Who Let the Dogs out?''
	console.log((i+1) + '. ' + animals[i].species + ': ' + animals[i].tagline);
}

//2b ------------ filter out friends of signed-in (first) animal 

//not friends callback function
function isFriend(user) {
	//loop through relationships.friends array and check if matches species from animals object
	var friends = user.relationships.friends;
	for(i=0; i<friends.length; i++){
		if (friends[i] === animals.species){ //gotta loop through animals somehow)
			return true;
		} 
	}
}

