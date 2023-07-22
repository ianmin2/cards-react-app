String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

Object.assign(window,
 {
    _doNothing : () => { },
 }
);