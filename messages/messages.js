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
    attachment: {
        type: "template",
        payload: {
            template_type: "list",
            top_element_style: "compact",
            elements: [
                {
                    title: "Calculus ans its Applications",
                    subtitle: "St. Leornard's Land | 19/05/17  12:30"
                },
                {
                    title: "Object Orientated Programming",
                    subtitle: "Forrest Hill | 10/05/17 09:30"
                },
		{
			title:"Data Analysis",
			subtitile:"Pleasence Sports Hall | 15/05/17 09:30"
		}
            ]      
        }
    }
};

export default {
    welcomeMessage,
    examMessage
} 
