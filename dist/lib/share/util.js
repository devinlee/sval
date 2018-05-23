"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freeze = Object.freeze;
exports.define = Object.defineProperty;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
exports.hasOwn = hasOwn;
var getOwnPropertyNames = Object.getOwnPropertyNames;
function getOwnNames(obj) {
    return getOwnPropertyNames(obj);
}
exports.getOwnNames = getOwnNames;
function assignPolyfill() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (objects.length === 0) {
        return null;
    }
    else {
        var obj = objects[0];
        for (var i = 1; i < objects.length; ++i) {
            for (var key in objects[i]) {
                if (hasOwn(objects[i], key)) {
                    obj[key] = objects[i][key];
                }
            }
        }
        return obj;
    }
}
exports.assign = typeof Object.assign === 'function'
    ? Object.assign
    : assignPolyfill;
var win = exports.assign({}, window);
function createSandBox() {
    return exports.assign({}, win);
}
exports.createSandBox = createSandBox;
exports.walk = require('acorn/dist/walk').simple;
//# sourceMappingURL=util.js.map