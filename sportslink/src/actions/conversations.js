import { getUsers } from '../actions/profiles'

export const getConversations = (username, messaging) => {
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

<<<<<<< HEAD
        }).then(() =>{ 
=======
        }).then(() => {
            getUsers(messaging)
        })
        .then(() =>{ 
>>>>>>> 07d56f92276a95169986d1968ee37c2cfd414197
            messaging.setContacts()
        })

        .catch(error => {
            console.log(error);
        });
}


export const createNewConversation = (currUser, otherUser, dashboard) => {
    const url = "/api/conversation"

    const request = new Request(url, {
        "method": "POST",
        "body": JSON.stringify({"sentUsername": currUser, "toUsername": otherUser}),
        "headers": {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                dashboard.props.history.push("/messaging");
                // return a promise that resolves with the JSON body
            } else {
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export const createNewMessage = (currUser, conversationID, messageData, messaging) => {
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

