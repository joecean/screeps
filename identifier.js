// identifier.js


//globals
var autoIncrementId = this.generateId();


function Identifier(){
    var id = this.generateId();

    this.getId = function(){
        return id;
    }
}


Identifier.prototype.generateId = function(){
    if (!autoIncrementId) {
        return Memory.autoIncrementId++;
    }
    return autoIncrementId++;
}


module.exports = Identifier;
