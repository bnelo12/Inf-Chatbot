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
                            payload: "news"
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
        			subtitle:"Pleasence Sports Hall | 15/05/17 09:30"
        		}
            ]      
        }
    }
};

const newsMessage = {
	attachment: {
		type:"template",
		payload: {
		    template_type: "list",
		    top_element_style: "compact",
		    elements: [
    			{
    			    title: "Team from School of Informatics in CyberCenturion finals",
    			    subtitle: "A team from School of Informatics competed...",
                    default_action: {
                        type: "web_url",
                        url: "http://www.ed.ac.uk/informatics/news-events/news/team-school-of-informatics-cybercenturion-finals",
                        webview_height_ratio: "tall",
                    }
    			},
    			{
    			    title: "Smart Robots for Intelligent Warehousing: from Research to Translation",
    			    subtitle: "Researchers from Statistical Machine Learning and Motor Control Group...",
                    default_action: {
                        type: "web_url",
                        url: "http://www.ed.ac.uk/informatics/news-events/news/smart-robots-intelligent-warehousing",
                        webview_height_ratio: "tall",
                    }
    			},
    			{
    				title:"New student society: EaRS (Embedded and Robotics Society)",
    				subtitle:"EaRS is the newest student society in the School of Informatics.",
                    default_action: {
                        type: "web_url",
                        url: "http://www.ed.ac.uk/informatics/news-events/news/new-student-society-ears",
                        webview_height_ratio: "tall",
                    }
    			}
	        ]      
		}
	}
};

export default {
    welcomeMessage,
    examMessage,
    newsMessage
} 
