(function (window) {
    if (window.location.href.match(/github.io|github-io/)) {
        $(containerId || "#controls").append('<a class="a back btn btn-mini btn-primary" type="button">Back...</a>');
    }
});