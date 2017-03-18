// consumer.js


function Consumer(broker) {
    var broker = broker;

    this.getBroker = function(){
        return broker;
    }
}


Consumer.prototype.handleTask = function(message){
    //console.log(message.getContent());
    let messageType = message.getMessageType();
    if (messageType == 'CREATE') {
        this.makeCreep();
    }
    else if (messageType == 'RESOURCE') {
        this.fetchMinerals();
    }
    else {
        console.log('Uknown messageType for %s', message.getId());
        this.getBroker().remove();
    }

}


Consumer.prototype.makeCreep = function(){
    Game.spawns[0].createCreep([WORK, CARRY, MOVE]);
}


Consumer.prototype.fetchMinerals = function(creep) {
   if(creep.carry.energy < creep.carryCapacity) {
       var sources = creep.room.find(FIND_SOURCES);
       if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
           creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
       }
   }
   else {
       var targets = creep.room.find(FIND_STRUCTURES, {
               filter: (structure) => {
                   return (structure.structureType == STRUCTURE_EXTENSION ||
                           structure.structureType == STRUCTURE_SPAWN ||
                           structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
               }
       });
       if(targets.length > 0) {
           if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
               creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
           }
       }
   }
}


Consumer.prototype.consume = function(){
    let message = this.getBroker().remove();
    this.handleTask(message);
}


module.exports = Consumer;
