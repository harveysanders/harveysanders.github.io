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

# Step 3 - Adding The Heads-Up Display

Most games display *status information* like the current score or number of lives remaining overlayed with the running game at either the top or bottom of the screen. We call this a "Heads-Up Display" and we've already written one for you in `js/view/hud.js`

To include it you will want to add the following script to `index.html` in the `<head>` element underneat the commment that says `<!-- add any additional scripts here -->` 

    <script src="js/view/hud.js"></script>

Find this file in your project and open it. You should see that it declares a function and assigns it to `window.opspark.makeHud`. Read the documentation for `makeHud` and follow it's instructions for adding the heads-up-display to the game. You will want to make a change to the code in `index.html` at `TODO 1`. Once that is done, you should see the heads-up display!

![Heads-Up Display](http://i.imgur.com/VG1KvnA.png)

Now, add one more line of code to `index.html` where you created your heads-up display.

    window.hud = hud;

By assigning the `hud` variable to a property on the `window` object, we can play with it in the console. 

![hud variable in console](http://i.imgur.com/nxwu637.png)

Open up the console in Chrome Developer Tools and type out each of these statements.

    hud.updateScore(10);

    hud.updateOf(1000);

    hud.setIntegrity(25);

    hud.setIntegrity(100);

    hud.kill();

**What do they do?**

# Step 4 - Adding A Background 

Include the script `js/view/background.js` by adding the following code to the `<head>` element of `index.html`

    <script src="js/view/background.js"></script>

Modify `index.html` at `TODO 2` to call our newly included code. You will need to supply the appropriate arguments to the function. 

```js
var background = opspark.makeBackground(app,ground);
view.addChild(background);
```

Once this is done correctly you should see Halle on a yellow background. 

![Halle On Yellow Background](http://i.imgur.com/iqo5v3F.png)

Our first goal is to create a great background for our game. That will require learning to draw with create.js.

# Drawing With Create.js

In order to draw something you will create a *shape* using one of the following functions:

Image | Code
------|------
![rect](http://i.imgur.com/gwbZLZl.png)    | `shape = draw.rect(width, height, color, strokeColor, strokeWidth);`
![line](http://i.imgur.com/Zy8nY0C.png)   | `shape = draw.line(fromX, fromY, toX, toY, strokeColor, strokeWidth);`
![circle](http://i.imgur.com/Zc9hJqU.png)    | `shape = draw.circle(radius, color, strokeColor, strokeWidth);`
![image](http://i.imgur.com/BGZCnX8.png) `href='img/moon.png'`    | `shape = draw.bitmap(href);`

In order to make that shape show on sreen you will need to add that shape to the `background` by calling

    background.addChild(shape);

Your shape will be created so that it appears at the upper-left hand corner of the screen, at `(0,0)` in your game's coordinate system, but you can place a shape anywhere on the screen by setting it's `x` and `y` properties.
    
    shape.x = 100;
    shape.y = 45;

Remember that `x` and `y` refer to a coordinate system which has an origin (0,0) in the upper-left hand corner. `x` becomes larger as you move to the right. `y` becomes larger as you move downward.

![cartesion coordinate system](http://i.imgur.com/jyZuFer.png)

We've defined a couple of variables that should help you draw shapes in the right place.

`canvasWidth` is the total width of the game screen  
`canvasHeight` is the total height of the game screen  
`groundY` is the y coordinate of the ground line  

See the [opspark-draw documentation](https://libraries.io/bower/opspark-draw) for more details on drawing functions you can use or look at the source directly in your project at `bower_components/opspark-draw/draw.js`. You can also use anything in the [create.js API](http://www.createjs.com/docs/easeljs/modules/EaselJS.html).

# Step 5 - Create Your Own Background

Create a great background for your game. With the draw functions provided and your javascript knowledge, you can create almost anything.

All drawing code for the background should go at `TODO: 3` in `js/view/background.js` within the `render()` function. 

Start by adjusting the background to a color you like and then fix the code so that it only shows the background color above the the ground. 

As a last step, depending on the background you've built, your heads-up-display may be hard to see or just plain ugly. Modify the colors used by `src/view/hud.js` to match your background.

If you need some inspiration, here are some things to try:

# Star Field

![Star Field](http://i.imgur.com/Vsdw99h.png)

Use a [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) to draw a bunch of objects to the screen. 

```js
var circle;
for(var i=0;i<100;i++) {
    circle = draw.circle(10,'white','LightGray',2);
    circle.x = canvasWidth*Math.random();
    circle.y = canvasHeight*Math.random();
    background.addChild(circle);
}
```

Try changing the code to make the result look more like actual stars.

# Moon

![Moon](http://i.imgur.com/ntD7AfF.png)

You can add images to your background using `draw.bitmap()`

```
var moon = draw.bitmap('img/moon.png');
moon.x = 300;
moon.y = 25;
moon.scaleX = 1.0;
moon.scaleY = 1.0;
background.addChild(moon);
```

Try moving the moon to a good location for your game.

Try changing the size of the moon by changing the moon's `scaleX` and `scaleY` properties


# Animation

create.js allows us to perform animation in our game. If you look in the upper left-hand corner of the game, you will see something like "57 fps". That means the game is running at 57 frames-per-second. Each "frame" is one drawing of our game and so we are redrawing the game 57 times every second. By making slight changes to what we draw over time we can give the illusion of motion. 

We don't have to completely re-create our game 57 times a second. Instead, we can setup a scene and then make slight modifications to it over time. In `background.js`, the `render()` function sets up our scene and the `update()` function is called once per frame. Whatever changes we make to the scene are drawn on the next frame. 

# Step 6 - Create a box

To illustrate this, let's draw a box on the screen. We will call it `backgroundBox`. In `background.js`, declare a variable `backgroundBox` directly after the `background` variable declaration.

    var backgroundBox;

Then in the `render()` function, store a rectangle in `backgroundBox` and add it to the background

```js
backgroundBox = draw.rect(100,100,'Blue');
backgroundBox.x = 0;
backgroundBox.y = 0;
background.addChild(backgroundBox);
```

You should now see a blue box in your background. Change the values of `backgroundBox.x` and `backgroundBox.y` so that the box appears on the ground in front of Halle.

![Halle and Blue Box](http://i.imgur.com/hDCmj47.png)

# Step 7 - Animating The Box

We can perform animation by making changes to our scene in the `update()` function. Remember that it is called once for each frame of the game.

In the `update()` function, add the following code:

    backgroundBox.x = backgroundBox.x + 1;

You should now see the box moving. What happened? Why is it doing that? Make sure you understand and make sure your partner (if you are pairing) understands as well. 

**Change the code so that the box moves towards Halle**

# Parallax

![Parallax](http://www.hallme.com/uploads/parallax-scrolling-mario.gif)

Parallax is a technique in animation for giving the illusion of depth. When you are moving, things that are close to you move quickly whereas things that are very far away may move slowly or not appear to move at all. We can use this technique in our game to create visually interesting backgrounds. 

# Step 8 - Creating a Parallax Effect

Try adding the following code to `update()`

```js
if(backgroundBox.x < -100) {
    backgroundBox.x = canvasWidth;
}
```

What is going on here?

We can take this technique one step further by applying it to *many* boxes. 

Go ahead and remove your `backgroundBox` from the screen by commenting out this line of code

    // background.addChild(backgroundBox);

After the declaration of `backgroundBox` declare a variable `buildings` and assign it an empty array.

    var buildings = [];

In `render()` create several boxes using a `for` loop and add them to `buildings` array. 

```js
var buildingHeight = 300;
var building;
for(var i=0;i<5;++i) {
    building = draw.rect(75,buildingHeight,'LightGray','Black',1);
    building.x = 200*i;
    building.y = groundY-buildingHeight;
    background.addChild(building);
    buildings.push(building);
}
```

You should see this:

![Halle With Buildings](http://i.imgur.com/LSKBOsR.png)

Make sure you understand what each line of this code does. Change how the building appear. Can you make them have different heights? Different colors?

![Halle With Buildings With Background](http://i.imgur.com/kyeRy7x.png)

Now, write code in `update()` that animates the boxes so that they move towards Halle. Use the technique we applied to `backgroundBox` to make the buildings continually appear in the game as Halle walks. 

# Step 9 - Setting Up Gameplay

You've created a rad background and are now ready to move on to gameplay. You'll be coding up and designing some game elements which Halle can interact with. The game manager provides an API for creating objects which move around the screen and can be run into, jumped over, or shot with Halle's gun. 

To create a new game manager, add the following code to `index.html` after `TODO: 3` 
    
    var game = opspark.createGameManager(app,hud);

The "level" file is where we are going to define all of our gameplay for our game. Add the following script to `index.html` in the `<head>` element underneath the commment that says `<!-- add any additional scripts here -->` 

```html
<script src="js/level01.js"></script>
```

And then add the following code to `index.html` following the creation of the game manager

    opspark.runLevelInGame(game);

Open up `js/level01.js` file in your editor. You should see this:

TK: image

This file is where we are going to be writing our code for the next couple of steps.

# Step 10 - Creating Your First Obstacle

An obstacle is the simplest element in our game. It moves at a fixed speed toward Halle as the game progresses. The obstacle must be avoided by either jumping or ducking and cannot be destroyed by being shot with Halle's gun. If the obstacle collides with Halle, Halle takes damage. If Halle takes enough damage, she dies and the game is over. 

We will create our first obstacle in `js/level01.js` inside of the `runLevelInGame` function. 

First, declare a variable `myObstacle` and create a new obstacle using the Game Managers `createObstacle()` function. The `createObstacle` function takes two parameters which define the size of the object (`hitZoneSize`) and how much damage the obstacle does when it collides with Halle (`damageFromObstacle`)

    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);

Then position that obstacle somewhere on screen by modifying the `x` and `y` properties of `myFirstObstacle` 

    myObstacle.x = 400;
    myObstacle.y = 100;

And finally add it to the game by calling the `addGameItem` function
    
    game.addGameItem(myObstacle);    

Once this is done correctly, you should see a gray circle on the screen whice moves towards Halle

TK: image

The circle you see on the screen is the "hit zone" for the obstacle. Once that hit zone collides with Halle, you should see Halle's health indicator decrease by the amount you specified in `damageFromObstacle`. Halle has hitzone's too. Open up `index.html` and find the `debugHalleHitZones` variable and change it to `true` You should now see the circles that make up Halle's hitzone.

Change the `y` property of `myObstacle` so that it eventually collides with Halle

The hitzones in our game are used for collision detection and always present, but when we are playing our game we don't actually show them. Instead of circles we draw something that represents our obstacle. 

Let's make our first obstable be a sawblade. Add the following code:

    var sawbladeBitmap = draw.bitmap('img/sawblade.png');
    myObstacle.addChild(sawbladeBitmap);

This loads up an image and adds it to our obstacle. You should now see a sawblade on the screen. You should also notice that sawblade doesn't fit within the hitzone. That is because when we `myObstacle.addChild()` the image is placed at the origin of the hitzone. You should adjust the `x` and `y` property of `myObstacle` so that it fits within the hit zone.

    sawbladeBitmap.x = -25;
    sawbladeBitmap.y = -25;

You can hide your hitzones for now. 

In `index.html` change the `debugHalleHitZones` variable to false.

In `js/level01.js` pass `false` to the method `game.setDebugMode()` 


