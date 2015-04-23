(function(){
		'use strict'

		/////////////////////////////////////////////////
		// Variable declaration
		/////////////////////////////////////////////////
		var charactersGuessed;
		var recordGuess;
		var toArray;
		var hasBeenGuessed;
		var forEachCharacter;
		var cornifyOnce;
		var cornify;
		var includeCornify;
		var draw;
		var canvas;

		/////////////////////////////////////////////////
		// Variable initialzation
		/////////////////////////////////////////////////
		charactersGuessed = [];

		recordGuess = function(character) {
			if(typeof(character) != 'string' || character.length != 1) {
				throw Error("recordGuess function takes one argument which must be a single character. Example: recordGuess(\"a\")")
			}
			charactersGuessed.push(character);
			console.log("Guessed so far:", charactersGuessed);
		}
		toArray = function(obj) {
			return Array.prototype.slice.call(obj)
		};
		hasBeenGuessed = function(character) {
			if(typeof(character) != 'string' || character.length != 1) {
				throw Error("hasBeenGuessed function takes one argument which must be a single character. Example: hasBeenGuessed(\"a\")")
			}
			return charactersGuessed.indexOf(character) != -1
		}
		forEachCharacter = function(str, fn) {
			var letters, mappedLetters
					;
			letters = toArray(str);
			mappedLetters = letters.map(fn);
			return mappedLetters.join('');
		}
		includeCornify = function() {
			var cornifyScript, files
				;
			cornifyScript=document.getElementById('__cornify_nodes');
			files=[
				'cornify/cornify.js',
				'cornify/cornify_run.js'
				];
			if(!cornifyScript) {
				cornifyScript=document.createElement('div');
				cornifyScript.id='__cornify_nodes';
				document.querySelector('body').appendChild(cornifyScript);
				files.map(function(file){
						var includeCornifyScript;
					includeCornifyScript=document.createElement('script');
					includeCornifyScript.src=file;
					cornifyScript.appendChild(includeCornifyScript);
				});
			}
		}
		cornifyOnce = function(){
			var tryAddCornify;
			tryAddCornify = function() {
					if(window.cornify_add) {
							window.cornify_add();
							return;
					}
					setTimeout(tryAddCornify, 500);
			}
			includeCornify();
			tryAddCornify();
		}
		cornify = function(times) {
      if(times === undefined) {
        times = 5;
      }
			for(var counter = 0; counter < times; counter += 1) {
					cornifyOnce();
			}
		}

		canvas = document.createElement('canvas');
		document.body.appendChild(canvas);
		draw = new Processing(canvas, function(p) {
				p.size(600, 600);
		});
		draw.background(255, 255, 255);

		/////////////////////////////////////////////////
		// Export variables
		/////////////////////////////////////////////////
		window.hangman = {
        // Records a guess as having happened. Pass exactly one character to this function.
				// Usage:
				// 	hangman.recordGuess("a");
				recordGuess: recordGuess,

				// Decompose a string into it's characters. Call a function for each callback and create
				// a new string out of its return values.
				// Usage:
				// 	var allZs = hangman.forEachCharacter("some phrase", function(character) {
				//  																			return "z";
				// 																			});
				forEachCharacter: forEachCharacter,

				// Returns true or false indicating whether the character provided has previously been
				// guessed via hangman.recordGuess().
				// Usage:
				//	if( hangman.hasBeenGuessed("a") ) { ... }
				hasBeenGuessed: hasBeenGuessed,

				// Make fun things appear all over the screen
				// Usage:
				// 	hangman.cornify(10);
				// will make 10 fun things appear on the screen. If no argument is provided a default value of 5 is used.
				cornify: cornify,

				// A reference to a ProcessingJs instance that you can use to draw. Dimensions are 600x600
				// Usage:
				// 	hangman.draw.rect(10, 50, 100, 200);
				draw: draw
		};
}).call();
