// broker.js


function Broker(queue=[]) {
    var queue = queue;

    this.getQueue = function(){
        return queue.slice();
    }

    this.add = function(element){
        return queue.unshift(element);
    }

    this.remove = function(){
        return queue.shift()
    }

    this.clear = function() {
        for (message in queue) {
            this.remove();
        }
    }
}


Broker.prototype.isEmpty = function(){
    return (this.getQueue().length == 0);
}

Broker.prototype.clearQueue = function(){
    this.clear();
}


module.exports = Broker;
