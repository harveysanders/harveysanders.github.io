(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    
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
    
    window.opspark.makePlayerManager = function (player, view, projectileManager) {
        var _activeKeys;
        
        _activeKeys = [];
        
        player.on('fire', function () {
            projectileManager.fire(player);
        });
        activate();
        
        var _playerManager = {
            player: player,
            update: update
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
            _activeKeys[e.keyCode] = e.type === 'keydown';
            
            if (e.type === 'keyup') {
                onKeyUp(e);
            } else {
                onKeyDown(e);
            }
        }
        
        function onKeyDown(e) {
            if (_activeKeys[KEYCODE_E]) {
                player.jumpfly();
            } else if (_activeKeys[KEYCODE_W]) {
                player.jump();
            } else if (_activeKeys[KEYCODE_Q]) {
                player.die();
            } else if (_activeKeys[KEYCODE_S]) {
                player.duck();
            }
            
            if (_activeKeys[KEYCODE_UP]) { 
            }
            
            if (_activeKeys[KEYCODE_SPACE]) { 
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
}(window));