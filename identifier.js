// identifier.js


//globals
var incrementingId = 0;


function Identifier() {
}


Identifier.prototype.generateID = function() {
    return incrementingId++;
}


module.exports = Message;
