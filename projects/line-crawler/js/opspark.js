(function (window) {

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;

    window.opspark.makeApp = function () {
        var motionPoem;

        var _app = {
            onTick: function(e) {
                motionPoem.update();
                stage.update();
            }
        }

        canvas = document.getElementById('canvas');
        stage = new createjs.Stage(canvas);

        stage.addChild(draw.rect(canvas.width, canvas.height, null, '#4F5661', 1));
        motionPoem = opspark.makeMotionPoem();
        motionPoem.init();

        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', _app.onTick, _app);
        
        return _app;
    }
}(window));