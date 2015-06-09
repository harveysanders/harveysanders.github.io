(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    
    var physikz = window.opspark.racket.physikz;
    
    var 
        KEYCODE_SPACE = 32,
        KEYCODE_UP = 38,
        KEYCODE_LEFT = 37,
        KEYCODE_RIGHT = 39,
        KEYCODE_Q = 81,
        KEYCODE_E = 69,
        KEYCODE_W = 87,
        KEYCODE_S = 83,
        KEYCODE_A = 65,
        KEYCODE_D = 68;
    
    var rules, view, activeKeys, _player;
    
    window.opspark.makePlayerManager = function (player, app, projectileManager) {
        _player = player;
        rules = app.rules;
        view = app.view;
        activeKeys = [];
        
        player.on('fire', function () {
            projectileManager.fire(player);
        });
        activate();
        
        var _playerManager = {
            player: player,
            update: update,
            hitTest: hitTest,
            handleCollision: handleCollision
        };
        
        function update() {
            
        }
        
        function activate() {
            player.on('exploded', onPlayerExploded);
            player.on('damaged', onPlayerDamaged);
            document.onkeydown = document.onkeyup = onKeyActivity;
        }
        
        function deactive() {
            onKeyUp();
            player.removeEventListener('exploded', onPlayerExploded);
            player.removeEventListener('damaged', onPlayerDamaged);
            document.onkeydown = document.onkeyup = null;
        }
        
        function onKeyActivity(e){
            e = e || window.event;
            activeKeys[e.keyCode] = e.type === 'keydown';
            
            if (e.type === 'keyup') {
                onKeyUp(e);
            } else {
                onKeyDown(e);
            }
        }
        
        function onKeyDown(e) {
            if (activeKeys[KEYCODE_E]) {
                player.jumpfly();
            } else if (activeKeys[KEYCODE_W]) {
                player.jump();
            } else if (activeKeys[KEYCODE_Q]) {
                player.die();
            } else if (activeKeys[KEYCODE_S]) {
                player.duck();
            }
            
            if (activeKeys[KEYCODE_UP]) { 
            }
            
            if (activeKeys[KEYCODE_SPACE]) { 
                player.shoot();
            }
        }
        
        function onKeyUp(e) {
        }
        
        function onPlayerExploded(e) {
            deactive();
            
            var i, id;
            
            // hud.setIntegrity(0);
            // player.alpha = 0;
            
            i = 0;
            id = setInterval(function(){
              player.explosion.emit({x: player.x, y: player.y});
              if (i > 60) {
                  window.clearInterval(id);
                  player.explosion.stop();
                  //space.splice(space.indexOf(player), 1);
                  view.removeChild(player);
              }
              i++;
            }, 17);
        }
        
        function onPlayerDamaged(e) {
            // hud.setIntegrity(player.integrity);
        }
        
        return _playerManager;
    };
    
    function hitTest(body) {
        _player.hitzones().forEach(function(hitzone) {
            var distanceProperties = physikz.getDistanceProperties(hitzone.localToGlobal(0,0), body);
            var hitResult = physikz.hitTestRadial(distanceProperties.distance, hitzone, body);
            if (hitResult.isHit) {
                handleCollision(distanceProperties, hitResult, physikz.getImpactProperties(hitzone, body));
            }
        });
    }
    
    function handleCollision(distanceProperties, hitResult, impactProperties) {
        /*
         * The velocity of Halle's hitzones (bodyA in this context) will 
         * not effected by any impact, in short, they will not move, so 
         * treat only bodyB (body in this context) .
         */
        
        var body = distanceProperties.bodyB; // the obstacle
        body.handleCollision(impactProperties.impact, impactProperties.bodyA); // orb handling collision with hitzone //
        impactProperties.bodyA.handleCollision(impactProperties.impact, body); // halle's hitzone handling collision with orb //
    }
    
}(window));