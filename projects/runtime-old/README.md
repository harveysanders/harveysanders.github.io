Runtime!
=========

Meet Halle, the official Operation Spark robot.

![Halle](http://i.imgur.com/yUKA9EN.gif)

Halle has some cool moves but nobody to play with. Let's build our own game using Halle!

# Step 1 - Getting Started

Install this project into your Cloud9 workspace by typing `opspark install` into a terminal and choosing the `runtime` project.

You can run the game by opening `index.html` and then choosing *Preview*. You should see Halle running on a blank background and you should be able to press the appropriate keys to make her jump and shoot. 

Now go back and look at the `index.html` file in Cloud9. `index.html` is an example of the kind of code you might see in a real-world project. The majority of the code is not in `index.html` itself but is loaded as external scripts. 

```
<script src="js/util/load.js"></script>
<script src="js/util/spin.min.js"></script>
<script src="js/util/point.js"></script>
<script src="js/spritesheet.js"></script>
...
<script src="js/view/ground.js"></script>
<script src="js/player/halle.js"></script>
<script src="js/player/playerManager.js"></script>
<script src="js/opspark.js"></script>
```

The scripts are organized so that each script handles one aspect of the game, with each name describing what they do. Professional developers break code into scripts or modules so that the code is easier to understand and so that many people can work on the code at the same time.

Some of the scripts are *library* or *third-party* code. This is code that other people wrote that we can use to do cool stuff.

```html
<script src="bower_components/easeljs/lib/easeljs-0.8.1.min.js"></script>
<script src="bower_components/PreloadJS/lib/preloadjs-0.6.1.min.js"></script>
<script src="bower_components/TweenJS/lib/tweenjs-0.6.1.min.js"></script>
<script src="bower_components/SoundJS/lib/soundjs-0.6.1.min.js"></script>
<script src="bower_components/opspark-draw/draw.js"></script>
```

For this project, we will be using the [create.js](http://createjs.com/) library to draw and animate our game. 

# Step 2 - Brainstorming

Before we start coding, we have to decide what kind of game we want to build with Halle. Look at the kind of moves that Halle can make and imagine how they would fit into **your** game. 

You will need to decide on a general *theme* for the game. What kind of world is Halle in? Is she in space, in a factory, on the streets of New Orleans? 

What are the *game mechanics*? What are the goals and what are the challenges? What might halle encounter as the game progresses? Are there points or a score? How does the game end? 

Finally, come up with a good *name* for your game. Having a great name for a project is an important step, but don't worry, you can always change it later. 

# Step 3 - HUD

Most games display *status information* like the current score or number of lives remaining overlayed with the running game at either the top or bottom of the screen. We call this a "Heads Up Display" and we've already written one for you in `src/view/hud.js`

To include it you will want to add the following script to `index.html` in the `<head>` element

    <script src="js/view/hud.js"></script>

Find this file in your project and open it. You should see that it declares a function and assigns it to `window.opspark.makeHud`. Read the documentation in the comments to see what it does, then add the example code provided to `index.html` at `TODO: 1`. Once that is done, you should see the heads-up display!

Now, add one more line of code

    window.hud = hud;

By assigning the `hud` variable to a property on the `window` object, we can play with it in the console. Open up the console in Chrome Developer Tools and type each of these code statements. What do they do?

    hud.updateScore(10);

    hud.updateOf(1000);

    hud.setIntegrity(25);

    hud.setIntegrity(100);

    hud.kill()

# Step 4 - Creating A Background

Include the script `src/view/background.js` in the same way you included `hud.js`. Find the script that is included and determine what function you need to call in order to create the background. Modify `index.html` at `TODO: 2` to call that function. You will need to supply the appropriate arguments to the function. 

    var background = // ????
    view.addChild(background);

Once this is done correctly you should see Halle on a yellow background. 

Our first goal is to create a great background for our game. That will require drawing. 

In order to draw something you will create a *shape* using one of the following functions:

    shape = rect(width, height, color, strokeColor, strokeStyle, xOffset, yOffset);
    shape = line(fromX, fromY, toX, toY, strokeColor, strokeStyle);
    shape = circle(radius, color, strokeColor, strokeStyle, xOffset, yOffset);
    shape = polyStar(radius, sides, pointSize, angle, color, strokeColor, strokeStyle, xOffset, yOffset);

and then you can add a shape to the background by calling:

     background.addChild(shape);

This code should go at `TODO: 3` in `src/view/background.js` within the `render()` function. 

See the [opspark-draw documentation](https://libraries.io/bower/opspark-draw) for more details on drawing functions you can use or look at the source directly in your project at `bower_components/opspark-draw/draw.js`. You can also use anything in the [create.js API](http://www.createjs.com/docs/easeljs/modules/EaselJS.html).

With just these simple functions and your current javascript knowledge, you can create almost anything.  

Start by adjusting the background to a color you like and then fix the code so that it only shows the background color above the the ground. Then, draw something new to your background.

One place to start is to use a [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) to draw a bunch of objects to the screen. Start with this:

```js
var circle;
for(var i=0;i<100;i++) {
    circle = draw.circle(10,'purple','black',1);
    circle.x = canvasWidth*Math.random();
    circle.y = canvasHeight*Math.random();
    background.addChild(circle);
}
```

You can also include images using `draw.bitmap()`

```
var moon = draw.bitmap('img/moon.png',100,125);
background.addChild(moon);
```

Now see what you can make!

Finally, depending on the background you've built, your heads-up-display may be hard to see or just plain ugly. Modify the colors used by `src/view/hud.js` to match your background.

# Step 5 - Animation and Parallax

Parallax is a technique in animation for giving the illusion of depth. When you are moving, things that are close to you move quickly whereas things that are very far away may move slowly or not appear to move at all. We can use this technique in our game to create visually interesting backgrounds. 

To illustrate this, let's draw a box on the screen. We will call it `backgroundBox`.

In `background.js`, declare a variable `backgroundBox` directly after the `background` variable declaration.

Then in the `render()` function, store a rectangle in `backgroundBox` and add it to 

```js
backgroundBox = draw.rect(100,100,'Gray');
backgroundBox.x = 300;
backgroundBox.y = 200;
background.addChild(backgroundBox);
```

You should now see a gray box in your background.

Now we are going to animate our box. The `update()` function is called once for every frame of our game. In the update() function you can change the position of our box by changing the `x` and `y` properties of the object.

In the `update()` function, add the following code:

    backgroundBox.x = backgroundBox.x - 1;

What happened? Why is it doing that? Make sure you understand and make sure your partner (if you are pairing) understands as well. 

Now try adding the following code to `update()`

```js
if(backgroundBox.x < -backgroundBox.getBounds().width) {
    backgroundBox.x = canvasWidth;
}
```

What is going on here?

Try using this technique to create a background with objects that move at different speeds. 
