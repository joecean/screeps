// consumer.js


function Consumer(broker) {
    var broker = broker;

    this.getBroker = function(){
        return broker;
    }
}


Consumer.prototype.handleTask = function(){
    console.log(message);
}


Consumer.prototype.consume = function(){
    let message = this.getBroker().remove(message);
    this.handleTask(message);
}


module.exports = Consumer;
