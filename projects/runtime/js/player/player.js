(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    
    var 
        _ = window._,
        Proton = window.Proton,
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz;
    
    window.opspark.makePlayer = function (startX, startY, particleManager) {
        var 
            player, 
            radius;
        
        radius = 25;
        
        player = draw.rect(radius, radius, '#666', null, null, -(radius+radius/10), -(radius/2));
        draw.circle(radius + 3, '#666', null, null, null, null, player);
        draw.circle(radius, '#CCC', null, null, null, null, player);
        draw.polyStar(radius, 3, 0, 0, '#666', null, null, null, null, player);
        draw.circle(radius-15, '#CCC', null, null, -5, null, player);
        
        // reset the radius, other non-radial drawing operations have overwritten it //
        player.radius = radius + 3;
        
        player.x = startX || (canvas.width - player.width) / 2;
        player.y = startY || (canvas.height - player.height) / 2;
        
        player.explosion = particleManager.makeEmitter(5, 8, null, new Proton.Velocity(new Proton.Span(4, 2), new Proton.Span(0, 360), 'polar'), [new Proton.RandomDrift(5, 0, .35)]);
        
        player = _.extend(player, physikz.makeBody('player', 0, 0, 0, 1, .1));
        
        player.getProjectilePoint = function () {
            return player.localToGlobal(radius + 10, 0);
        };
        
        player.getExhaustPoint = function () {
            return player.localToGlobal(-(radius + 10), 0);
        };
        
        player.handleCollision = function (impact) {
            if (player.integrity > 0) {
                player.integrity -= impact;
                player.dispatchEvent('damaged');
                if (player.integrity <= 0) {
                    player.dispatchEvent('exploded');
                }
            }
        };
        
        return player;
    };
}(window));