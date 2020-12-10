export function getConversations(username, messaging) {
    const url = "/api/conversation/" + username
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get conversations");
            }
        })
        .then(json => {
            messaging.setState({conversations: json})
        })
        .catch(error => {
            console.log(error);
        });
}

export function createNewConversation(currUser, otherUser, messaging) {
    const url = "/api/conversation"

    const request = new Request(url, {
        "method": "POST",
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
    const url = "/api/message/" + conversationID
    const request = new Request(url, {
        "method": "POST",
        "body": JSON.stringify({sentUsername: currUser, messageData: messageData}),
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
                getConversations(currUser, messaging)
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

