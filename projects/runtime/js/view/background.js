(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var backgroundBox;
        var tank;
        var backClouds;
        var cityscape;

        // add objects for display in background
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // TODO: 3 - YOUR DRAW CODE GOES HERE
            
            backgroundBox = draw.rect(100, 100, 'ccc');
            backgroundBox.x = 300;
            backgroundBox.y = 200;
            
            var backgroundFill = draw.rect(canvasWidth,canvasHeight /2 ,'#150c09');
            backgroundFill.y = canvasHeight/2 ;

            tank = draw.bitmap('img/TankCommando2.png', canvasWidth-200, (canvasHeight /2)-125);
            cityscape = draw.bitmap('img/cityscape-silhouette.png', null, canvasHeight/2 -362);
            backClouds = draw.bitmap('img/errieclouds.png');
            
            background.addChild(backClouds);
            background.addChild(backgroundFill);
            background.addChild(cityscape);
            background.addChild(tank);
            background.addChild(backgroundBox);
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            backgroundBox.x += 1;
            backClouds.x -= .75;
            cityscape.x -= .25;
            tank.x -= .5;

            if(backgroundBox.x < -100) {
                backgroundBox.x = canvasWidth;
            }

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
}(window));