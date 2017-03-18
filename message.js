// task.js


//imports



//globals


const identifier = require('./identifier');


function Message(message_type) {
    var content = {
        id: new identifier().getId(),
        messageType: messageType
    };

    this.getId = function(){
        return content.id;
    }

    this.getMessageType = function(){
        return content.messageType;
    }

    this.getContent = function(){
        return content;
    }
}


module.exports = Message;
