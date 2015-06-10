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
                {type: 'scaryhead',x:800,y:30},
                //{type: 'sawblade',x:900,y:20},
                //{type: 'sawblade',x:1100,y:110},
                //{type: 'sawblade',x:1900,y:20},
                {type: 'sawblade',x:1900,y:20},
                {type: 'sawblade',x:2900,y:320},
                {type: 'sawblade',x:3200,y:120}
            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        
        
        var createSawBlade = function(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 40;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            var sawbladeImg = draw.bitmap('img/sawblade.png');
            sawbladeImg.rotationalVelocity = 2;
            sawbladeImg.x = -25;
            sawbladeImg.y = -25;
            myObstacle.x = x;
            myObstacle.y = groundY-y;
            myObstacle.addChild(sawbladeImg);
            game.addGameItem(myObstacle);
        }
        
        var createScaryHead = function(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 40;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            var scaryhead = draw.bitmap('img/scaryhead_small.png');
            scaryhead.rotationalVelocity = 2;
            scaryhead.x = -26;
            scaryhead.y = -30;
            myObstacle.x = x;
            myObstacle.y = groundY-y;
            myObstacle.addChild(scaryhead);
            game.addGameItem(myObstacle);
        }
        
        var createGameItem = function(gameItem){
            switch(gameItem.type) {
                case "scaryhead":
                    createScaryHead(gameItem.x, gameItem.y);
                    break;
                case "sawblade":
                    createSawBlade(gameItem.x, gameItem.y);
                    break;
                default:
                    console.log(gameItem.type);
                    console.log("default switch");
                    break;
            }
        }
       
        levelData.gameItems.forEach(createGameItem);
        
        
        
        

    }
})(window);
