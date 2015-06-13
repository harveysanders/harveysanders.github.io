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
                {type: 'sawblade',x:800,y:30},
                {type: 'enemy',x:900,y:20},
                {type: 'enemy',x:1400,y:30},
                {type: 'sawblade',x:1900,y:20},
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
            sawbladeImg.x = -25;
            sawbladeImg.y = -25;
            myObstacle.x = x;
            myObstacle.y = groundY-y;
            myObstacle.rotationalVelocity = -22;
            myObstacle.addChild(sawbladeImg);
            game.addGameItem(myObstacle);
        };
        
        var createEnemy = function(x,y) {
            var enemy = game.createGameItem('enemy', 25);
            var scaryhead = draw.bitmap('img/scaryhead_small.png');
            scaryhead.x = -29;
            scaryhead.y = -29;
            enemy.addChild(scaryhead);
            enemy.x = x;
            enemy.y = groundY-y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 1;

            enemy.onPlayerCollision = function() {
                console.log('the enemy has hit Halle');
                game.changeIntegrity(-10);
            };

            enemy.onProjectileCollision = function() {
                console.log('halle shot enemy.');
                game.increaseScore(100);
                enemy.fadeOut();
            };
        };

        var createGameItem = function(gameItem){
            switch(gameItem.type) {
                case 'sawblade':
                    createSawBlade(gameItem.x, gameItem.y);
                    break;
                case 'enemy':
                    createEnemy(gameItem.x, gameItem.y);
                    break;
                default:
                    console.log(gameItem.type);
                    console.log("default switch");
                    break;
            }
        };
        
        
        
        levelData.gameItems.forEach(createGameItem);


    };
})(window);
