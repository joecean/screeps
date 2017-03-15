// task.js


//imports
const identifier = require('./identifier');


function Message(message_type) {
    var id = new identifier().getId();
    var messageType = messageType;

    this.getId = function(){
        return id;
    }

    this.getMessageType = function(){
        return messageType;
    }
}


module.exports = Message;
