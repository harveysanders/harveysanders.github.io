(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 50;
        
        
        var createSawBlade = function(x,y) {
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            var sawbladeImg = draw.bitmap('img/sawblade.png');
            sawbladeImg.x = -25;
            sawbladeImg.y = -25;
            myObstacle.x = x;
            myObstacle.y = groundY-y;
            myObstacle.addChild(sawbladeImg);
            game.addGameItem(myObstacle);
        }
            
        
        createSawBlade(400, 50);
        createSawBlade(500, 20);
        createSawBlade(600, 110);
        
        /*
        var createObstacle = function(type,x,y){
            
        }
       
        levelData.gameItems.forEach(createObstacle)
        */
        
        
        

    }
})(window);
