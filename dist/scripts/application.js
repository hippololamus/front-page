(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var hippologo = require('./hippologo');


hippologo.create().update('Where have all the hippos lol\'d?');

},{"./hippologo":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
