$(function () {
    window.opspark = window.opspark || {};
    window.opspark.notes = window.opspark.notes || {};
    var notes = window.opspark.notes;
    
    notes.show = function (prependTo, file) {
        prependTo = prependTo ? prependTo : '#container';
        file = file ? file : '.notes/directions.html';
        if (window.location.href.match(/c9\.io|github_io|localhost|127\.0\.0\.1|file\:\/\/\//)) {
            $('<a/>')
                .attr('id', 'btnDirections')
                .attr('href', file)
                .attr('target', '_blank')
                .attr('type', 'button')
                .addClass('btn btn-primary btn-sm btn-block')
                .css('margin-top', '5px')
                .css('margin-bottom', '5px')
                .html('Directions...')
                .prependTo($(prependTo));
        }
    };
    
    notes.hide = function (btnId) {
        btnId = btnId ? btnId : '#btnDirections';
        $(btnId).detach();
    };
});