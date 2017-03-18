// main.js


//imports
const broker = require('./broker');
const consumer = require('./consumer');
const producer = require('./producer');


//globals
var masterBroker = new broker(Memory.masterBroker);
var masterConsumer = new consumer(masterBroker);
var masterProducer = new producer(masterBroker);


module.exports.loop = function () {
    //masterProducer.produceFetchMineralMessage();
    //console.log(masterBroker.getQueue()[0].prototype);
}
