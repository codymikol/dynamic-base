(function () {
    window.__getLocation = function () {
        return window.location;
    };
    window.dynamicBase = function (suffix) {
        var base = document.createElement('base');
        var l = window.__getLocation();
        base.href = l.origin + '//' + l.hostname + (l.port ? ':' + l.port : '') + (suffix || '');
        document.getElementsByTagName('head')[0].appendChild(base);
    };
})();