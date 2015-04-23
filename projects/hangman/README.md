Text-based Games
================

It's hard to keep in mind now that graphics can be almost completely realistic but it wasn't that long ago that there were no graphics. People still had video games of course but they played them entirely with text. Rather than using your mouse, or touching things, you would have to type in commands and rather than seeing monsters you would just get a description.

![Text-based game](http://core0.staticworld.net/images/article/2013/01/colossalcaveadventure1-100023877-orig.jpg)

In fact, let's take a few minutes and play one now to get familiar with it.

Take five minutes and [play this game now](https://rawgit.com/secretGeek/console-adventure/master/console.html). Press <kbd>F12</kbd> to open up your browser's console. Follow the instructions in there (hint: type *help()* to get a list of all commands you can type). Move around, try to see how far you can get, you can always reset the game by refreshing your browser tab.

---

Fun-ish, right?

So what's going on here? Did you realize that you were just typing javascript? What is going on when you type `north()` or `speak()`? That's a part of javascript we've worked with before.

Developer Tools
===============

But what is this thing that opened when we hit <kbd>F12</kbd>? It doesn't really look like part of a web page. In fact it is not, you've just found the Developer Tools. This is something available in every web browser and on every web page. You can use it to see how the web page is built, how it behaves, and even modify the page's HTML, CSS, and Javascript. We will be using it a lot. In fact, let's open a different web page like Wikipedia and open the developer tools there (hit <kbd>F12</kbd> or <kbd>Ctrl</kbd>\+<kbd>Shift</kbd>\+<kbd>C</kbd>\)

What is important for us though, you can use the developer tools console to see any messages the developer of the web page added that a regular user won't see. This is very useful while creating web pages since you can write code that outputs messages to the console for you to understand what's going on in code that's not visible. Try writing a message to the console now. Type something like this into it

```js
console.log("My name is George and I'm", 32, "years old");
```

Hit enter and you'll see it prints that message back.

![`console.log` output](http://content.screencast.com/users/togakangaroo/folders/Jing/media/37231651-3a0e-40bb-9bd3-d6075fc6e83b/2015-04-18_1128.png)

That's not terribly useful until we combine it with an application. Let's open up our bouncing box application for example. Inside the update function add the following line

```js
console.log("the speed is currently", speed, "the position is", position);
```

Now run the bouncing box application. To be able to open the console correctly you'll have to pop the tab out of your page.

![Button to pop the tab out is to the right of the url](http://content.screencast.com/users/togakangaroo/folders/Jing/media/b4c30169-e124-4d71-aac3-41b8d765f98c/2015-04-18_1133.png)

When you're on the page you should be able to hit <kbd>F12</kbd> and see your messages! Modify the `console.log()` function call above so that you can see the current direction as well.

Let's make hangman
==================

In order to get experience using the developer tools, and writing more code let's make a simple text-based game. Rather than make an RPG let's make Hangman.

![Hangman](http://content.screencast.com/users/togakangaroo/folders/Jing/media/e5486f3b-608f-43d9-9a55-775ddda5b727/2015-04-18_1144.png)

Let's play a couple quick rounds together. *(note to teachers: write each line on the board separately)*

```
the phrase is
----- -- -------
```

Let's guess (e)

```
-e--- -- -------
```

Let's guess (n)

```
-e--- -- -------
```

Let's guess (r)

```
-e-r- -- -r--r--
```

When I write out this line, for each letter how do I know whether to write a letter, a dash, or a space? Try to come up with this *algorithm* now.

---

We should get something like this:

```
When displaying current phrase
  for each letter in the phrase
    if it has been guessed output the letter
    if it is a space output a space
    otherwise output a "-"
```

Great, we just figured out most of hangman. Now let's translate that to something the computer will understand!

Open up your website workspace and

```bash
os install hangman
```

Now open up the index.html file inside of the hangman folder, this is where you will be working today.

1 - Create a phrase
-------------------

Let's start really simple. In the Javascript Declare a variable called `secretPhrase`, store any phrase you want inside of it, and output to the console.

```js
var secretPhrase;
secretPhrase = "learn to code";
console.log("The secret phrase is", secretPhrase);
```

Save the file, run the application and view the message in the console.

2 - Display the phrase as dashes.
---------------------------------

Let's write some code to display the current phrase with dashes.

```
----- -- ----
```

*For this section we're going to add code inside the `displayCurrent` function.* Let's do a simplified version of our algorithm from above

```
for each letter in the phrase
  if it is a space output a space
  otherwise output a "-"
```

Remember how we told you that jQuery was a library that someone created to make it easy to work with web pages? We did the same thing for you to make it easy to create a hangman game. To do something with each letter you can do something like

```js
var currentPhrase = hangman.forEachCharacter(secretPhrase, function(character) {
    return "a";
});
console.log("current phrase is", currentPhrase);
```

Change the code inside of `displayCurrent` to say this and view the results in the console.

But we can do more than that! We can use the `if` keyword on each character.

```js
displayCurrent = function() {
	var currentPhrase = hangman.forEachCharacter(secretPhrase, function(character) {
	  if(character === " ") {
	    return "a";
	  } else {
	    return "b";
	  }
	});
	console.log("Current phrase is:", currentPhrase);
}
```

What will this print? Modify the code so that if it's a space it outputs a space, otherwise it outputs a dash. Try this function out by typing `displayCurrent()` into the console.

In order to see what functions are available type `hangman` into the console and hit enter. What functions are available?

3 - Implement the `guess` function
----------------------------------

Remember how in that lame little RPG we played above you could move around by typing commands like `north()`, `south()`, `east()`, and `west()` into the console? Those are just functions that someone created, just like `rect()`, `text()`, and `drawWinston()` in your [Khan Academy homework](https://www.khanacademy.org/computing/computer-programming/programming/functions/p/function-parameters). Functions are a great way for someone to interact with your program.

So let's think of the function that we want and what it should do. It would be great if the user could type into the console

```js
  guess('o');
```

and have the application display the current status of their phrase

```
  Current phrase is: l-ar- -o cod-
```

That would be cool. You notice that we already created a `guess` function for you. Let's edit it to take one parameter for the characterGuessed. Also we need to record the guess somewhere. We will do that by calling the `recordGuess` function in our `hangman` library

```js
  guess = function(characterGuessed) {
      hangman.recordGuess(characterGuessed);
  }
```

Run your application. You note that you can make guesses as we wanted but it doesn't display the current phrase status. We can do that by typing `displayCurrent()` into the console.

Of course, we *always* want that to display the current state when we guess, typing it over and over again is annoying. Modify the `guess` function so that it always calls `displayCurrent()` after calling `hangman.recordGuess`.

4 - Display the phrase with guessed letters visible
---------------------------------------------------

You'll notice that we're still not getting the current phrase displayed the way that we want - the guessed letters are not displaying instead of dashes. That's because we haven't done that yet! Let's modify `displayCurrent` to show the letters that have been guessed. To do that we can use the `hasBeenGuessed` function from our library

```js
displayCurrent = function() {
	var currentPhrase = hangman.forEachCharacter(secretPhrase, function(character) {
	  if(character === " ") {
	    return " ";
	  } else if( hangman.hasBeenGuessed(character) ){

	   	// What goes here?


	  } else {
		return "-";
	  }
	});
	console.log("Current phrase is:", currentPhrase);
}
```

Change your code to the above and modify the `// What goes here?` line appropriately.

Run your application You should be able to play hangman!

Try it out with your partner. Change the secret phrase and let your partner play.

5 - Detect when they've won
---------------------------

But what's the fun of playing a game if you can't tell when youve won? How can we figure that out?

Well, if you think about it, we have the code for that already. They win when there are no dashes in the displayed phrase, and we control whether when we output a dash with the code `return "-";`. So let's just check if the code to call the dash ever gets called

```js
displayCurrent = function() {

	var numberOfDashes = 0;

	var currentPhrase = hangman.forEachCharacter(secretPhrase, function(character) {
	  if(character === " ") {
	    return " ";
	  } else if( hangman.hasBeenGuessed(character) ){
	   	return character;
	  } else {

		numberOfDashes = numberOfDashes + 1;

		return "-";
	  }
	});
	console.log("Current phrase is:", currentPhrase);
}
```

now you can check if the current phrase had any dashes by checking

```js
	if( numberOfDashes === 0 ) {
		//Then they won
	}
```

Change the `displayCurrent` function to add this check at the end. Output *"Congratulations, you won"* if they won. Also, call `hangman.cornify()` for a surprise!

--------------------------------------------------------------------

6 - Let's Draw Things
----------------------

Do you remember your [Khan Academy homework](https://www.khanacademy.org/computing/computer-programming/programming)? You could draw things using [ProcessingJs](http://processingjs.org/reference/) like this

```js
	rect(10, 30, 100, 200);
	ellipse(50, 20, 50, 70);
```

Well we currently have ProcessingJs set up on this page! Don't believe me? Try opening up your console and typing in;

```js
	hangman.draw.rect(10, 30, 100, 200);
```

So that's one tiny difference - before you had all your functions that you could just use `rect`, `background`, `fill`, `storke`, etc. All functions that you can just type and have them work are called *global* functions. On this version these functions are no longer *global* and live inside the `hangman.draw` *object*. You don't have to understand what that means for now. Just know that to call your functions you have to prefix them with `hangman.draw.`. Let's make the background visible.


```js
	hangman.draw.background(50, 50, 50);
```


In Khan Academy your canvas was 400x400 pixels. It's not here. Find out what the size of it is.

Play around with the console and processingJs. See if you can draw a stick figure.

![Stick Figure](http://content.screencast.com/users/togakangaroo/folders/Jing/media/7c449183-6cef-4652-b1f9-5e54fc7c9bec/2015-04-23_1322.png)

7 - Create a function to Draw a Hangman 
---------------------------------------

So now that you've figured that out we are going to create a function to draw a hangman. Inside your javascript code let's create a new function. Create this right next to where you *define the implementation of* `displayCurrent`.

```js
	var drawHangman;
	drawHangman = function() {
		console.log("drawing hangman");
		// TODO: draw head
		// TODO: draw body
		// TODO: draw arms
		// TODO: draw legs
	};
	displayCurrent = function() {
		...
```

I think you've all figured out by now that we can declare the variable `drawHangman` and assign it at the same time right? Feel free to do that

```js
	var drawHangman = function() {
		...
	};
```

Just remember that this is doing two things at the same time.

So now we should be able to do `drawHangman()` in the console and it should print out `"drawing hangman"`, right? Go ahead and try this.

It didn't work, right? That's because `var drawHangman` is *inside of a function* (right at the very top of our code on the line after the `&lt;script&gt;` tag). So `drawHangman` is not *global*, and we can only rever to *global* variables in the console. This is actually a good thing. If everything was *global* then any part of our program would be able to overwrite and change any other part of the program. When programming we want as few things to be *global* as possible. Except of course when we know what we're doing and want to make something *global* on purpose. So how do we do that? Find the following bit of code toward the bottom

```js
	// Export variables you want available in the console here
	window.displayCurrent = displayCurrent;
	window.guess = guess;
```

This *exposes* both the `displayCurrent` and `guess` functions *globally* by adding them to the special `window` object. Go ahead and expose your `drawHangman` function as well.

You should now be able to run `drawHangman()` in the console and get it to output the "drawing hangman" message.

Add code to the `drawHangman` function to repplace the lines containing "TODO". Don't forget to save, refresh, and type `drawHangman()` in the console to see it redraw as you work.

8 - Draw Hangman In Parts
-------------------------

Of course that's not how hangman works. It draws the parts of a hangman one at a time, right? Not all at once. So how do we do that? What would be really nice, is if we had a function called `drawNext`. And the first time you call it would draw the head, the second time the body, then an arm, another arm, a leg, and finally the last leg. That would be sweet, but how to do that.

Well consider how we might do that with things in the real world. In the real world we might have a whiteboard and a bunch of jars.

![jars](http://i.c-b.co/is/image/Crate/OvalClampTopHerbJarS12OT7/$web_zoom$&/1308302306/oval-spice-herb-jars.jpg)

We can label the jars. One will be labeled `drawNext`, another will be labeled `drawHead`, another will be labeled `drawLeftArm` and so on. And inside each jar we have a piece of paper. Which say something like this.

* `drawHead` - Draw a circle. Move the paper from the `drawBody` jar, to the `drawNext` jar.
* `drawBody` - Starting at the bottom of the circle draw a line for the body. Move the paper from the `drawLeftArm` jar to the `drawNext` jar.
* `drawLeftArm` - Draw a line for the left arm at an angle from the body. Move the paper from the `drawRightArm` jar to the `drawNext` jar.
* `drawRightAram` - Draw a line for the right arm at an angle from the body. Move the paper from the `drawLeftLeg` jar to the `drawNext` jar.
* `drawLeftLeg` - Draw a line for the left leg at a downward angle from the body. Move the paper from the `drawRightLeg` jar to the `drawNext` jar.
* `drawRightLeg` - Draw a line for the right leg at a downward angle from the body. Empty the `drawNext` jar.

To start with, we simply move the paper from `drawHead` into the `drawNext` jar. What happens when we open the `drawNext` jar, take out the paper, and follow the instructions? What happens when we do that again? And again?

Great, we know what we want to do, now let's translate that to code!

As before, in our analogy a labeled jar relates to a variable and a piece of paper with instruction relates to functions. So we're going to need seven variables and six functions. Put this right after your `drawHangman` function.

```js
	var drawNext;

	var drawHead = function() {
		//TODO - draw head
		drawNext = drawBody;
	};
	var drawBody = function() {
		//TODO - draw body
		drawNext = drawLeftArm;
	};
	var drawLeftArm = function() {
		//TODO - draw left arm
		drawNext = drawRightArm;
	};
	var drawRightArm = function() {
		//TODO - draw right arm
		drawNext = drawLeftLeg;
	};
	var drawLeftLeg = function() {
		//TODO - draw left leg
		drawNext = drawRightLeg;
	};
	var drawRightLeg = function() {
		//TODO - draw right leg
		drawNext = null;
	};
``` 

Note that at end of the chain we assign to `drawNext` the special value `null`. This is one of several alternatives we have to indicate "there's nothing else to do". We'll discuss some issues with that in a moment.

But for now, let's go ahead and replace the "TODO" lines above with real code. Move code out of your `drawHangman` function into these functions until the `drawHangman` function is empty.

Now we do the initial part where we move the paper from `drawHead` into the `drawNext` variable. Toward the bottom of your script, just before you call `displayCurrent()` add

```js
	drawNext = drawHead;
```

One thing you must always keep in mind in programming: once you write your code, how are you going to test that it is doing the right thing? We will teach you many techniques for this, but the simplest one is just to run your code and see that it does what you expected it to do. Unfortunately, simply making `drawNext` *global* 

```js
   window.drawNext = drawNext;
```

won't work. This is because you can think of `window.drawNext` as it's own jar. And nothing ever puts new things in it! So it's going to contain the instructions for `drawHead` (because that's what's in `drawNext` when this code runs) and it will run those instructions over and over again.

Instead let's repurpose our drawHangman function and make it draw the entire hangman but using our `drawNext` function. For this we will use some of the stuff we learned in our homework about `while loops`. **Replace** the code inside `drawHangman` with

```js
	var drawHangman = function() {
		console.log("drawing hangman");
		// TODO: while drawNext is not null
		// 		TODO: call the function in the drawNext variable
	}
```

Fill out the TODO lines. 

**HINT:** To figure out how to check if one value is equal to another try typing the following line-by-line into your console. See if you can predict what it will output

```js
	var a = 123;
	a === 123;
	a === 456;
	a !== 123;
	a !== 456;
	a === null;
	a !== null;

	a = null;
	a === null;
	a !=== null;
```

Before moving on, make sure that you can run `drawHangman()` in the console and it will draw the full hangman by calling the `drawNext` function over and over.

9 - Draw Next Part When We Guess Wrong
--------------------------------------

So we can always draw the next part of the hangman by calling `drawNext()`. That's great! So all we need to do is know when the user has guessed incorrectly and call `drawNext()`. But how can we tell if the user guessed incorrectly? The `hangman` library does not seem to have anything to help us there. Fortunately we can leanr how to check ourselves. Modify the code for the `guess` function so that it looks like this

```js
	guess = function(characterGuessed) {
		hangman.recordGuess(characterGuessed);
		displayCurrent();
		// TODO: If secretPhrase does not contain characterGuessed
		// 			TODO: call drawNext()
	};
```

Remember, that we refer to `secretPhrase` as a *string*. How can we know if a character is in a string? Well a good idea might be to [search Google for *"javascript check if character is in a string"*](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=javascript%20check%20if%20character%20is%20in%20a%20string&es_th=1). You will find some examples here. Another way is to check some code that we know already does something similar. For example the `hangman.hasBeenGuessed` function. You can look inside `hangman-utils.js`. There will be a lot of unfamiliar things here. See if you can find the part that declares `hasBeenGuessed`, the last line preforms the check to see if the character passed in is one of the characters that has been guessed. Play around in the console to figure this out

```js
	var phrase = "learn code";
```

Figure out the code to check the letter `r` is in the phrase (it should output `true` or `false`). What if the letter we're checking for is `z`?

**HINT:** It has to do with the *index* of the characer in the string. As we learned in the homework quiz, the *index* of the letter `c` in the string "learn code" is 6. What would the index be for `z`?

You can now play hangman and watch the stick figure draw.

**BONUS:** You might notice that if you've already lost and guess the wrong letter one more time you get a big read `ReferenceError` in the console. This is because once you've lost `drawNext` is `null`. `null` is not a function and therefore you get an error when you try to call it with `drawNext`. Fix this bug by checking that `drawNext` is not null before calling it.

10 - Draw the Gallows
--------------------------------------

Ok, one last thing. I believe the game is called **hangman**, not **stick figure**. It's morbid, but I guess we should draw a gallows.

Create a function called `drawGallows`. Inside of it draw the gallows, and call the function when the application starts (right after you call `displayCurrent()` at the bottom).

When the application starts it should look like this

![empty gallows](http://content.screencast.com/users/togakangaroo/folders/Jing/media/81ed672a-cf3b-49e2-9c5c-44076b2e4ab4/2015-04-23_1608.png)

and when you unfortunately lose it should look like this

![ummm...not-empty gallows](http://content.screencast.com/users/togakangaroo/folders/Jing/media/798cbe41-c91e-47f5-b58e-a17dd6168182/2015-04-23_1609.png)

11 - Publish Your Website!
--------------------------

Now that your done, we just need to send changes to bitbucket. Run the following in the Cloud9 command line to make sure you have the latest version of the opspark utility

```bash
	npm install -g opspark
```

Follow the instructions and finally publish your changes

```bash
	os publish
```

Your hangman game should now be on your website!
