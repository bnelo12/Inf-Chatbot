import express from 'express';

import sendAPI from '../messenger-api/send'
import receiveAPI from '../messenger-api/receive'

const router = express.Router();

router.get('/', (req, res) => {
    if (req.query['hub.verify_token'] === '94BCB2F7752E2F9AF39A4D6DF32D5') {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Error, wrong validation token');    
    }
});

router.post('/', (req, res) => {
    var data = req.body;
    if (data.object === 'page') {
        data.entry.forEach(function(entry) {
            var pageID = entry.id;
            var timeOfEvent = entry.time;
            entry.messaging.forEach(function(event) {
                if (event.message) {
                    receiveAPI.receivedMessage(event);
                } else {
                    console.log("Webhook received unknown event: ", event);
                }
            });
        });
        res.sendStatus(200);
    }
});

function sendWelcomeMessage(recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "button",
                    text: "Welcome to Inf-bot! Press 'Get Started!' for info on informatics courses.",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://petersapparel.parseapp.com",
                            title: "Get Started!"
                        }
                    ]
                }
            }
        }
    };
    sendAPI.callSendAPI(messageData);
}

function sendGenericMessage(recipientId, messageText) {
    sendAPI.sendTextMessage(recipientId, messageText);
}

export default router;