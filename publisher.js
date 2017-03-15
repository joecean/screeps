// publisher.js


function Publisher(broker) {
    var broker = broker;

    this.getBroker = function(){
        return broker;
    }
}


Publisher.prototype.publish = function(message){
    this.getBroker.add(message);
}


module.exports = Publisher;
