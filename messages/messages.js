const welcomeMessage = {
    attachment: {
        type: "template",
        payload: {
            template_type: "generic",
            elements: [
                {
                    title: "Welcome to Inf-Bot!",
                    subtitle: "Looking for exam times and Informatics news. Click the links below!",
                    buttons: [
                        {
                            type: "postback",
                            title: "Get Exam Times",
                            payload: "exams"
                        },
                        {
                            type: "postback",
                            title: "Informatics News",
                            payload: "DEVELOPER_DEFINED_PAYLOAD"
                        },
                        {
                            type: "postback",
                            title: "Useful Information",
                            payload: "DEVELOPER_DEFINED_PAYLOAD"
                        }                          
                    ]
                }
            ]      
        }
    }
};

const examMessage = {

};

export default {
    welcomeMessage,
    examMessage
} 