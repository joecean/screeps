// publisher.js


// imports
const message = require('./broker');


function Producer(broker) {
    var broker = broker;

    this.getBroker = function(){
        return broker;
    }
}


Producer.prototype.produce = function(message){
    this.getBroker().add(message);
}

Producer.prototype.produceFetchMineralMessage = function() {
    let m = new message(messageType="RESOURCE");
    this.produce(m);
}


module.exports = Producer;
