import request from 'request';

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const callSendAPI = (messageData) => {
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var recipientId = body.recipient_id;
            var messageId = body.message_id;

            console.log("Successfully sent generic message with id %s to recipient %s", messageId, recipientId);
        } else {
            console.error("Unable to send message.");
            console.error(response);
            console.error(error);
        }
    }) 
}

const sendTextMessage = (recipientId, messageText) => {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: messageText
        }
    };
    callSendAPI(messageData);
}

const sendAttachmentMessage = (recipientId, attachmentMessage) => {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: attachmentMessage
    };
    callSendAPI(messageData);
}

const sendTypingOn = (recipientId) => {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        sender_action: 'typing_on'
    };
    callSendAPI(messageData);
}

const sendReadReceipt = (recipientId) => {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        sender_action: 'mark_seen'
    };
    callSendAPI(messageData);
};

export default {
    callSendAPI,
    sendTextMessage,
    sendReadReceipt,
    sendAttachmentMessage,
    sendTypingOn
};