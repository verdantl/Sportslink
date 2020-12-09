export function getConversations(messaging) {
    const url = "/api/conversation"
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                console.log(res.json)
                return res.json();
            } else {
                alert("Could not get conversations");
            }
        })
        .then(json => {
            console.log(json)
            messaging.setState({conversations: json})
        })
        .catch(error => {
            console.log(error);
        });
}

export function createNewConversation(currUser, otherUser, messaging) {
    const url = "/api/conversation"

    const request = new Request(url, {
        "method": "post",
        "body": {"sentUsername": currUser, "toUsername": otherUser},
        "headers": {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                messaging.setState({
                    message: {
                        body: "Success: Created a new conversation.",
                        type: "success"
                    }
                });
            } else {
                messaging.setState({
                    message: {
                        body: "Error: Could not create conversation.",
                        type: "error"
                    }
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export function createNewMessage(currUser, conversationID, messageData, messaging) {
    const url = "/api/conversation/" + conversationID + "/message"

    const request = new Request(url, {
        "method": "post",
        "body": {id: conversationID, sentUsername: currUser, messageData: messageData},
        "headers": {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                messaging.setState({
                    message: {
                        body: "Success: Created a new message.",
                        type: "success"
                    }
                });
            } else {
                messaging.setState({
                    message: {
                        body: "Error: Could not create message.",
                        type: "error"
                    }
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
}

