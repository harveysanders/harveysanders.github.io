The Line Crawler
===

This little motion poem is a play on Ari Bader-Natal line sketch, using the draw line API to create a cool randomized piece of art.

**Table of Contents**

- [The Line Crawler](#the-line-crawler)
  - [Installation](#installation)
  - [Overview](#overview)
    - [Specs](#specs)
    - [Take Away](#take-away)
    - [Entering Code](#entering-code)
    - [Type of App : Web](#type-of-app--web)
  - [Lesson Steps](#lesson-steps)
    - [Initializing Our App](#initializing-our-app)
    - [TODO 1 : Declare Our Variables](#todo-1--declare-our-variables)
    - [TODO 2 : Initialize Our Variables](#todo-2--initialize-our-variables)
    - [Cartesian Coordinates](#cartesian-coordinates)
    - [TODO 3 : Create a Condition for Drawing ACROSS](#todo-3--create-a-condition-for-drawing-across)
      - [Drawing Lines](#drawing-lines)
      - [Incrementing Our Drawing Position](#incrementing-our-drawing-position)
      - [Changing State](#changing-state)
    - [Run the App!](#run-the-app)
  - [Your Turn](#your-turn)
  - [Just Code TODOs](#just-code-todos)
  - [Just Code TODOs in Google Presentation](#just-code-todos-in-google-presentation)

## Installation

Create a new Cloud9 workspace and clone the project from github.com:

1. From your Cloud9 Dashboard, find in the upper left corner and click the green button, "Create New Workspace" > "Clone From URL":

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/clone-new-workspace.png">

2. In the "Source URL" form input, copy and paste in the following URL (see A):
    
        https://github.com/OperationSpark/line-crawler.git
    
    Then, in the environment selection box, select "HTML5" (see B).  Finally, click the green button "Create" (see C).
    
    <img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/clone-workspace.png">

3. Wait for the workspace to finish spooling (while spooling up, you'll see a spinning gear on the newly created workspace in the sidebar), and once the workspace is completed, click the green button, "START EDITING".

    <img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/start-editing.png">

4. Now, when the workspace is loaded, select the command-line in the bottom window pane, and enter the command `bower install`, then press `Enter`, like this:

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/motion-poem-install-bower.png">

    You'll see some test flying by on the command-line as some required files are installed... 

    and when complete, you'll see:
    
    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/bower-done.png">

Nice, you're in business...

***

## Overview

### Specs

Our journey into programmer art continues, using randomized drawing positions and color in this little motion poem.  We're going to be drawing to an HTML5 Canvas element using the drawing API of the CreateJS module, EaselJS, and our helper library, draw, that simplifies the drawing process somewhat.

### Take Away

Using the draw line API to create a cool randomized piece of art.

Some concepts you'll learn are:


* Drawing with CreateJS and our draw utility.
* RGB color.
* Using constants to represent state and to avoid magic values and typos in code.
* Leveraging the power of built-in and 3rd party API (DRY), like Math and opspark-draw.
* Variable declaration and initialization.
* Function invocation and passing arguments to functions.
* Conditional statements - making decisions in code.
* Random number generation within a 0-based range.
* Pair programming.

### Entering Code

As we work through the app, you'll find `// TODO //` notes in our `app.js` file, and _under_ these `TODO` lines is where you'll enter the code we need to type.  It's important you enter the code you need to type for the step under these `TODO` place markers, because code is executed in a particular order.

So, to complete a lesson step, _find_ the `TODO` place marker in the appropriate JavaScript file:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/find-todo.png">

...then put your cursor on the line below the `TODO`, and enter the code from the current lesson step:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/todo-done.png">

Sweet!

### Type of App : Web

Note that **this app will run _in a web browser_**, preferably Chrome.

***

## Lesson Steps

All of our coding, like all our little motion poems, will happen in the `motion-poem.js` file.  So, open the file at:

    js/motion-poem.js

### Initializing Our App

Starting up an application often takes a few steps of:

* Importing some libraries of code.
* Loading some external data.
* Initializing some variables for use in our app.

We won't be loading any external data in this app, and we've already loaded the libraries we're going to use, both the CreateJS module, EaselJS and our drawing utility, draw, so that part is done.

And, you can see that we've also instantiated our view object onto which we can add children display objects - we'll do this in all our motion poem projects.

We have also added for you some constants:

````javascript
const ACROSS = 'across';
const DOWN = 'down';
const BACK = 'back';
const UP = 'up';
````

These will represent the state of our little app, and help us make decisions as to _how_ to draw our lines.  Often, constants are used to express those type of things that will never change and to hold values used repetitively that we don't want developers to have to manually type, like strings, that are easy to misspell.

###TODO 1 : Declare Our Variables

We going to need a few variables:

* The variable `i`, a counter or _index_ which we'll increment to tell us _where_ to start drawing.
* A `shape`, which we'll assign to a CreateJS `Shape`, a type of object specialized for drawing vector graphics, and onto which we'll draw our lines.
* And finally, a variable to represent which direction we'll increment our drawing position, represented by our constants, ACROSS, DOWN, BACK, UP.  We have four diretions, and the `direction` property will be assigned to one of these, in a sequential order.

Alrighty, let's find **TODO 1** and declare our variables:

````javascript
// TODO 1 : Declare our variables //
var i, shape, direction;
````

Perfect!  Now, before we can use our variables, we need to initialize them to a value. Find **TODO 2** and initialize our app's variables:

###TODO 2 : Initialize Our Variables

````javascript
init: function() {
    // TODO 2 : Initialize our variables //
    i = 0;
    direction = ACROSS;
    shape = new createjs.Shape();
    view.addChild(shape);
},
````

### Cartesian Coordinates

`i` will used to help us find the start of our drawing position on our canvas.

Our canvas is a rectangular shape, and the points or positions within the canvas are registered using cartesian coordinates along both an x and y axis.  The value of x is incremented going left to right, and the value of y is incremented going top to bottom - a throwback to the manner in which tube TV's refreshed pictures.  So the top left point on the canvas has an x and y value of `0, 0`.  Here's a visual representation:

<img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/coords.png">

We are going to draw lines from and to the outer edges of our canvas, and because we want to start drawing from the top left side of our canvas, we'll first set `i` to `0`.

Our `direction` will first be set to `ACROSS` because we'll be drawing _across_ the top of the canvas.  For the mere sake of clarity, it is often better to use values contextual to our intent - we want the app to be drawing and drawing _across_.  This makes it clear to us and other developers what _should_ be happening in this particular state of the app.

And finally, we'll assign the variable `shape` to a new CreateJS Shape, using its built in _constructor_ function.  We use and recommend a <a href"http://en.wikipedia.org/wiki/Factory_(object-oriented_programming)" target="_blank">factory</a> for initialization of objects in JavaScript, but JavaScript also supports constructor functions, special functions that developers define to initialize an object of a particular type.

When you see the keyword `new`, this is what's happening - we're invoking the constructor of that type of object, in this case, a `Shape` object, and doing so returns an _instance_ of a Shape.  It would be similar to you going to a factory and saying, "Please give me a _new_ car", the factory then does its thing, and out rolls a new _instance_ of a car.

By convention, constructor functions are also named using a capital letter, note the capital `S` in `new createjs.Shape`.  NOTE: The `createjs` part of that statement is called a _namespace_, and ensures the CreateJS Shape definition does not clash with another library's Shape definition.

Other functions and factory methods are normally named using camelcase, starting with a lowercase letter, and subsequent individual words are capitalized.  In our own motion poem, the motion poem itself exposes a factory method instead of a constructor, which you'll notice with the function `makeMotionPoem()`.  Dig?

Finally, _with_ our new _instance_ of our Shape, we then add that shape as a child of the `view` using its `addChild()` method.  This puts our Shape object on the `stage`, making it visible to our user.  Of course, the Shape is currently blank, we've not drawn any graphics on it yet, but we'll get to that soon enough...


###TODO 3 : Create a Condition for Drawing ACROSS

The rest of the code we write in this app will take place in our `update()` function.

The `update()` method is called 60 times per second by the CreateJS framework, and allows us to simulate motion, otherwise known as animation, and do other logical checks on each cycle.  This is essentially how all games work - on some type of game loop allowing us to update game elements and perform other calculations, like hit testing, etc.

Find **TODO 3** and create a condition statement that checks if our direction is `ACROSS`, so that when true, we can fire our code that draws across the top of the canvas from left to right:

````javascript
update: function () {
    // NOTE: draw.line(fromX, fromY, toX, toY, color, thickness, shape);
    
    // TODO 3 : Create the condition for ACROSS //
    if (direction === ACROSS) {
        draw.line(i, 0, Math.random() * canvas.width, canvas.height, draw.randomColor(25, 200, 255, .4), 7, shape);
        if (i < canvas.width) {
            i++;
        } else {
            direction = DOWN;
            i = 0;
        }            
    }
    
    // other code ...
````

Our `direction` is by default set to `ACROSS`, so at _startup_ this condition will be true and our code block will fire.

#### Drawing Lines

First thing we do is draw a line.  You'll see in the comment a note on the API for the method `draw.line()`:

    // NOTE: draw.line(fromX, fromY, toX, toY, color, thickness, shape);

We've put this here as a courtesy to show you what parameters are expected of the `draw.line()` API.  Clearly, we want to draw line from a point (an x/y coordinate on our canvas) to a point (another x/y coordinate on our canvas), and this is what the first 4 expected parameters of the `draw.line()` function.

Interestingly, we commence drawing _from_ an x/y value of `0, 0` and draw to a randomly selected `x` value within the range of the width of our canvas - accomplished with the expression `Math.random() * canvas.width` - and a 'y' value of the `canvas.height`.

The next parameter is color, and we're using the `draw.randomColor()` API of our `draw` utility to randomly create a color within certain ranges of mixtures of red blue and green.  RGBA represents color mixed of red, blue, green in values within the range of 0 to 255, and alpha for transparency.  <a href="http://en.wikipedia.org/wiki/RGBA_color_space#ARGB" target="_blank">RGBA</a> is a 16-base <a href="http://en.wikipedia.org/wiki/Hexadecimal" target="_blank">hexidecimal value</a>, where primary colors are arranged in discrete channels, stored in memory using a single 32-bit unsigned integer.

Each of the 256 values represents a different color of blue, or green, etc.  And by combining these values, we can get up to 16,777,216 possible colors!

If you want to play with the values to see how they are represented, <a href="http://www.hexcolortool.com/" target="_blank">check out this page...</a>

To finish up with the `draw.line()` API, the last two included arguments are the line thickness and a Shape onto which we want to draw the line.  If we didn't provide a Shape as this last argument, the `draw.line()` method would conveniently return a _new_ Shape with the line drawn on it.

#### Incrementing Our Drawing Position

To draw along from left to right along the top along the top of our canvas, we're merely going to increment the value of `i` from `0` to the value of `canvas.width` and assign this to our `fromX` value expected of the `draw.line()` method.  The `fromY` value we can leave at `0` for the duration of drawing `ACROSS`.

We already know that `i` starts at `0`, so we can first just go a head and draw our line staring at `0, 0`, which we've done.

Next, to know when we should _stop_ drawing `ACROSS`, we check `if (i < canvas.width)`, and if `i` is _still_ less than the width of our canvas, we merely increment `i` with the statement `i++;`, and then we exit our conditional statement.  On the next tick of our game loop, we begin drawing our line one pixel to the right, then do our check again until `if (i < canvas.width)` returns `false`!

#### Changing State

Once our check against the canvas width returns false, we enter the `else` part of our conditional statement, and here set our `direction` to the value `DOWN` and we reset the value of `i` to help us set up our next drawing state, `DOWN`.  On the next loop, the check to see `if (direction === ACROSS)` returns false, so we've changed state, and we will no longer continue to draw lines from across the top of our canvas!

### Run the App!

Alrighty, to run the app, YOU MUST open the file at:

    index.http

And with the `index.html` tab selected in the editor (see A), you can simply press the green play button (see B).

This will start an Apache web server in a new tab of the Console View, the bottom window pane of the Cloud9 IDE.  Once Apache has booted, you can click the URL `https://line-crawler-jfraboni.c9.io/index.html` (see C) - this will open a new tab with the appliation running.

<img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/run-app.png">

You can _split_ your tabs to keep the app running side by side your code while you continue to work.  First, _right-click_ the tab with the running app (see A), then select `Split Pane in Two Columns` (see B): 

<img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/split-tabs.png">

This will give you this setup:

<img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/side-by-side.png">

As you save your future work, changes to your code will be reflected in the app > you don't have to press "Run" again - as long as the Apache web server is still running - you need only press the refresh button on the tab with the app running in it, like so:

<img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/refresh-html.png">

***

## Your Turn

Ok, it's your turn!

Now we want to draw from the top right corner to the bottom right corner of our canvas - and you've got to figure out how to do it.  In fact, you'll need to figure out how to draw from and to the rest of the 3 sides of our canvas.

You've now implemented the pattern to draw from the top left across to the top right of the canvas, so you should be able to figure out the code to draw DOWN.

Knowing what the draw.line() API takes as arguments _and_ the conditional check that told us when to _stop_ drawing ACROSS and switch to drawing DOWN, let's figure out a conditional statement to draw DOWN.  

We'll give you some hints:

* Think first about where you want to start drawing _from_ and where you want to draw _to_.  Remember that a point on the canvas has 2 values, an x and y.  So the _drawing-from_ point will have an x and y value, and the _drawing-to_ point will also have an x and y value.
* Draw out what it is you want to accomplish.  This will help you figure out which _drawing-from_ values need to be incremented or decremented, and which _drawing-to_ values need to be randomized within either the range of the canvas width or canvas height.
* You will want to start by adding on a `else if` condition that checks if `direction === DOWN`.  In fact, will help you one step further > you can template your conditional statements for each drawing state you need to handle, like so:

````javascript
// other code...

////////////////////////////////////////////////////////////////
// START OF CONDITIONAL STATEMENTS                            //
////////////////////////////////////////////////////////////////

// TODO 3 : Create the condition for ACROSS //
if (direction === ACROSS) {
    draw.line(i, 0, Math.random() * canvas.width, canvas.height, draw.randomColor(25, 200, 255, .4), 7, shape);
    if (i < canvas.width) {
        i++;
    } else {
        direction = DOWN;
        i = 0;
    }
}

// TODO 4 : Create a condition for DOWN //
else if (direction === DOWN) {
    // your code here //
} 

// TODO 5 : Create a condition for BACK //
else if (direction === BACK) {
    // your code here //
}
 
// TODO 6 : Create a condition for UP //
else {
    // your code here //
}

////////////////////////////////////////////////////////////////
// END OF CONDITIONAL STATEMENTS                              //
////////////////////////////////////////////////////////////////

// other code...
````

And _one_ last thing, in your final `else` conditional statement, reset the graphics on the `shape` variable so we can start over and keep performance within reason.  To do that, after you've reset the value of `i`, add:

````javascript
shape.graphics.clear();
````

Pair off and code with your buddy.  Two eyes on a problem and checking code as you go is a powerful way to create good code and problem solve much more quickly.

Awesome, let's get to it!

***

## Just Code TODOs

[Just Code TODOs](https://github.com/OperationSpark/line-crawler/blob/master/JUST-TODOS.md)

## Just Code TODOs in Google Presentation

<a href="https://docs.google.com/presentation/d/18G2v8GAb3j0-bbrtyLueIC18mHziKxlqPPz01X5uBr0/edit?usp=sharing" target="_blank">Code Presentation</a>

&copy; Operation Spark 2015
