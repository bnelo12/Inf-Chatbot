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
                sendAPI.sendTextMessage(senderID, "Here are the latest headlines from Informatics news.");
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
        if (messageText.includes('get started') || messageText.includes('list') || messageText.includes('help')) {
            sendAPI.sendAttachmentMessage(senderID, messages.welcomeMessage);
        }
        else if (messageText.includes('news') || messageText.includes('headlines')) {
                sendAPI.sendTextMessage(senderID, "Here are the latest headlines from Informatics news.");
                sendAPI.sendAttachmentMessage(senderID, messages.newsMessage);
        }
        else if (messageText.includes('exam') || messageText.includes('exams')) {
                sendAPI.sendTextMessage(senderID, "Retrienving the exam times for you.");
                sendAPI.sendAttachmentMessage(senderID, messages.examMessage);
        }
        else if (messageText.includes('who are you') || messageText.includes('what are you') || messageText.includes('what is this')) {
                sendAPI.sendTextMessage(senderID, "I am Inf Bot. I can help with exam times and Informatics news.");
        }
        else if (messageText.includes('can you') || messageText.includes('you do')) {
                sendAPI.sendTextMessage(senderID, 'I can provide you with informatics help, type "list" for some options.');
        }
        else if (messageText.includes('thank')) {
                sendAPI.sendTextMessage(senderID, "You're welcome! Let me know if you need anything else.");
        }
        else if (messageText.includes('fuck') || messageText.includes('shit') || messageText.includes('cunt')) {
                sendAPI.sendTextMessage(senderID, "That's not very nice.");
        }
        else {
            sendAPI.sendTextMessage(senderID, 'Hi! Type "Get Started" or "list" for a list of useful commands. I can also be conversational. (i.e) Ask me for the exam times.');
        }
    }
}

export default {
    receivedMessage,
    receivedPostback
}
