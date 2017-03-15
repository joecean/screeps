// identifier.js


//globals
var incrementingId = this.getIcrementingId();


function Identifier(){
    var id = this.generateID();

    this.getId = function(){
        return id;
    }
}


Identifier.prototype.generateID = function(){
    return incrementingId++;
}


Identifier.prototype.getIcrementingId = function(){
    if (!incrementingId) {
        return 0;
    }
    return incrementingId;
}


module.exports = Identifier;
