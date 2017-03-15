// task.js


//imports
const identifier = require('./identifier');

//globals
// TODO: import message types


function Message(message_type) {
    var id = new identifier();
    var message_type = message_type;

    this.id = function(){
        return id;  // add get?
    }

    this.message_type = function(){
        return message_type;
    }
}


module.exports = Message;
