(function (window) {
    window.opspark = window.opspark || {};

    var physikz = window.opspark.racket.physikz;
    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.createGameManager = function(app,hud) {
        var score = 0;
        var health = 100;
        var view = app.view;
        var space = app.space;

        function increaseScore(amount) {
            score += amount;
            hud.updateScore(amount);
            console.log("score = ",score);
        }

        function getScore() {
            return score;
        }

        function changeIntegrity(amount) {
            health += amount;
            console.log("Integrity = ",health);
            hud.setIntegrity(health);
            if(health < 0) {
                hud.kill();
                halle.die();
            }
        }

        hud.setIntegrity(100);
        hud.updateOf(10000);
        
        function createGameItem(type,radius) {
            var body = _.extend(new createjs.Container(),physikz.makeBody(type));
            body.radius = radius;

            body.handleCollision =  function (impact, otherBody) {
                if(body.collided) {
                    return;
                }
                body.collided = true;
                if(otherBody.type == 'hitzone') {
                    body.onPlayerCollision(body);    
                }
                else if(otherBody.type == 'projectile') {
                    body.onProjectileCollision(body);    
                }
            }

            body.onProjectileCollision = function() {

            }

            body.onPlayerCollision = function() {

            }

            // TODO: require timeout as arguments
            body.fadeOut = function() {
                removeFromSpace(body);
                createjs.Tween.get(body).to({alpha: 0}, 100).call(function() {
                    removeGameItem(body);
                });
            }

            // TODO: require timeout as arguments
            body.shrink = function() {
                removeFromSpace(body);
                createjs.Tween.get(body).to({scaleX: 0, scaleY: 0}, 100).call(function() {
                    removeGameItem(body);
                }); 
            }

            body.flyTo = function(x,y) {
                removeFromSpace(body);
                createjs.Tween.get(body).to({x:x,y:y}, 100).call(function() {
                    removeGameItem(body);
                }); 
            }
            return body;
        }

        function addGameItem(gameItem) {
            if(debugMode) {
                var hitCircle = draw.circle(gameItem.radius,'rgba(0, 0, 0, .3)');
                gameItem.addChild(hitCircle);
            }
            view.addChild(gameItem);
            space.push(gameItem);
        }

        function removeFromSpace(gameItem) {
            var ix = space.indexOf(gameItem);
            if(ix != -1) {
                space.splice(ix,1);
            }
        }

        function removeGameItem(gameItem) {
            var ix = space.indexOf(gameItem);
            if(ix != -1)  {
                space.splice(ix,1);
            }
            view.removeChild(gameItem);
        }

        function createObstacle(radius,damage) {
            var gameItem = createGameItem('obstacle',radius);
            gameItem.velocityX = -2;

            gameItem.onPlayerCollision = function() {
                changeIntegrity(-damage);
            };
            return gameItem;
        }

        var gameItemFactory;
        function setGameItemFactory(factory) {
            gameItemFactory = factory;
        }

        function playLevel(levelData) {
            levelData.gameItems.forEach(gameItemFactory);
        }

        var debugMode = false;

        function setDebugMode(debug) {
            debugMode = !!debug;
        }

        return {
            increaseScore: increaseScore,
            getScore: getScore,
            changeIntegrity: changeIntegrity,
            createGameItem: createGameItem,
            addGameItem: addGameItem,
            removeGameItem: removeGameItem,
            createObstacle: createObstacle,
            setGameItemFactory: setGameItemFactory,
            playLevel: playLevel,
            setDebugMode : setDebugMode,
            ground: app.ground,
            groundY: app.ground.y
        }
    }
})(window);
