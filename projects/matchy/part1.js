// Use this file to implement Part One of your project

var animal = {};
animal.name = "Great White Shark";
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

var quackers = { name: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals[1] = quackers;

var polloLoco = { name: 'chicken', tagline: 'finger lickin\' good', noises: ['bok bok', 'cluck cluck', 'bwok bwok', 'smk smk'] };
animals.unshift(polloLoco);

var winAmpMascot = { name: 'llama', tagline: 'it really whips the llama\'s ass!', noises: ['spit!', 'hee haw', 'ahroooga', 'pfff'] };
animals.push(winAmpMascot);

var tasmanianDevil = {
    name: 'sarcophilus harrisii',
    tagline: 'bad a$$ ',
    noises: ['', '', '', ''] };

var friends = [];
friends.push(polloLoco.name, winAmpMascot.name);

var relationships = {};
relationships.friends = friends;

var matches = [];
relationships.matches = matches;
relationships.matches.push(quackers.name, animal.name);

for(var i=0; i<animals.length; i++) {
	//add relationships to each animal in animals with key of relationships
	animals[i].relationships = relationships;
}

