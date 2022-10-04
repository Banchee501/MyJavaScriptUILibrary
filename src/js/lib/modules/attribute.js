import $ from '../core';

$.prototype.getAttr = function (name) {
    for (let i = 0; i < this.length; i++) {
        this[i].getAttribute(name);
    }
    return this;
};

$.prototype.setAttr = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }
    return this;
};

$.prototype.removeAttr = function (name) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }
    return this;
};

$.prototype.toggleAttr = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].toggle(name, value);
    }
    return this;
};