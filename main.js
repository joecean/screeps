// main.js


//imports
const broker = require('./broker');
const consumer = require('./consumer');
const publisher = require('./publisher');


//globals
var masterBroker = new broker(Memory.masterBroker);
var masterConsumer = new publisher(masterConsumer);
var masterPublisher = new publisher(masterBroker);


module.exports.loop = function () {
    console.log(masterBroker.getQueue());
}
