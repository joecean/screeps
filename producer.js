// publisher.js


function Producer(broker) {
    var broker = broker;

    this.getBroker = function(){
        return broker;
    }
}


Producer.prototype.produce = function(message){
    this.getBroker().add(message);
}


module.exports = Producer;
