import sendAPI from "./send"
import messages from "../messages/messages"

const receivedPostback = (event) => {
    const senderID = event.sender.id;
    const type = event.postback.payload;

    console.log("Postback data: ", event.postback);

    if (type) {
        switch (type) {
            case 'exams':
                sendAPI.sendTextMessage(senderID, "Retrienving the exam times for you.");
                sendAPI.sendAttachmentMessage(senderID, messages.examMessage);
                break; 
            case 'news':
                sendAPI.sendTextMessage(senderID, "Here are the latest headlines from informatics' news.");
                sendAPI.sendTypingOn(senderID);
                sendAPI.sendAttachmentMessage(senderID, messages.newsMessage);
                break;
	   } 
    }
}

const receivedMessage = (event) => {
    var senderID = event.sender.id;
    var message = event.message;


    sendAPI.sendReadReceipt(senderID);
    sendAPI.sendTypingOn(senderID);

    if (message.text) {
        var messageText = message.text.toLowerCase();
        var messageAttachments = message.attachments;
        if (messageText.includes('news')) {
                sendAPI.sendTextMessage(senderID, "Here are the latest headlines from informatics' news.");
                sendAPI.sendTypingOn(senderID);
                sendAPI.sendAttachmentMessage(senderID, messages.newsMessage);
        }
        if (messageText.includes('exam') || messageText.includes('exams')) {
                sendAPI.sendTextMessage(senderID, "Here are the latest headlines from informatics' news.");
                sendAPI.sendTypingOn(senderID);
                sendAPI.sendAttachmentMessage(senderID, messages.newsMessage);
        }
        switch (messageText) {
            case 'get started':
                sendAPI.sendAttachmentMessage(senderID, messages.welcomeMessage);
                break;
            default:
                sendAPI.sendTextMessage(senderID, 'Hi! Type "Get Started" for a list of useful commands.');
        }
    }
}

export default {
    receivedMessage,
    receivedPostback
}
