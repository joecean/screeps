// broker.js


function Broker(queue=[]) {
    var queue = queue;

    this.queue = function(){
        return queue.slice();
    }

    this.add = function(element){
        return queue.unshift(element);
    }

    this.remove = function(){
        return queue.shift()
    }
}


Broker.prototype.isEmpty = function(){
  return (this.queue.length == 0);
}


module.exports = Broker;
