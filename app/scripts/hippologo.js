var create = function(config) {
    'use strict';

    var that = {};
    var _config = config || {};

    _config.tagName = _config.tagName || 'h1';

    var title = document.createElement(_config.tagName);
    title.classList.add('hippologo');
    document.body.appendChild(title);

    var update = function(titleString) {
        title.innerHTML = titleString;
    };

    // export methods
    that.update = update;

    return that;
};

exports.create = create;
