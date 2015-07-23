// Use this file to implement Part One of your project

var animal = {};
animal.species = "Great White Shark";
animal['tagline'] = "Don't swim with the sharks!";
animal.noises = null;

var noiseArray = [];
noiseArray[0] = 'dun-nuh, dun-nuh, dun-nuh';
noiseArray.push('swiiiiish');
noiseArray.unshift('chomp!!');
noiseArray[3] = 'gurggle..';

var noises = 'noises';
animal[noises] = noiseArray;

var animals = [];
animals.push(animal);

var quackers = { species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals[1] = quackers;

var polloLoco = { species: 'chicken', tagline: 'finger lickin\' good', noises: ['bok bok', 'cluck cluck', 'bwok bwok', 'smk smk'] };
animals.unshift(polloLoco);

var winAmpMascot = { species: 'llama', tagline: 'it really whips the llama\'s ass!', noises: ['spit!', 'hee haw', 'ahroooga', 'pfff'] };
animals.push(winAmpMascot);

var friends = [];
friends.push(polloLoco.species, winAmpMascot.species);

var relationships = {};
relationships.friends = friends;

var matches = [];
relationships.matches = matches;
relationships.matches.push(quackers.species, animal.species);

for(var i=0; i<animals.length; i++) {
	//add relationships to each animal in animals with key relationships
	animals[i].relationships = relationships;
}

