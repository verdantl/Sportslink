export const getUsers = (dashboard) => {
    const url = '/api/users';
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            dashboard.setState({ users: json.users});

        }).then(() => {
            dashboard.forceUpdate()
        })
        .catch(error => {
            console.log(error);
        });
}

export const getUser = (username, dashboard) => {
    const url = '/api/users/' + username;
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
                
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            dashboard.setState({user: json});
            dashboard.forceUpdate()
        })
        .catch(error => {
            console.log(error);
        });
}

//In progress
export const updateUserInfo = (attributes, userID, dashboard) => {
    const url = "/api/users/" + userID
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(attributes),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            window.location.reload();
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        dashboard.setState({hideLoading: true})
        getUser(userID, dashboard);
        getUsers(dashboard);
        
    })
    .catch(error => {
        console.log(error);
    });
};

export const deleteUser = (user, dashboard) => {
    const url = "/api/users/" + user._id
    const request = new Request(url, {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            window.location.reload();
        }
    })
    .then(json => {
        const url = "/api/accounts/" + user.username
        const request2 = new Request(url, {
            method: "DELETE",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
        fetch(request2)
            .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            dashboard.setState({hideLoading: true})
            getUsers(dashboard)
            // the resolved promise with the JSON body
        })
    })
    .catch(error => {
        console.log(error);
    }); 
}
    
//In progress
export const addImage = (image, username, dashboard) => {
    const url = "/api/images/" + username
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify(image),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            window.location.reload();
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        getUser(username, dashboard);
        dashboard.setState({hideLoading: true})
        
    })
    .catch(error => {
        console.log(error);
    });
};

export const removeImage = (imageID, username, dashboard) => {
    const url = "/api/images/" + username + '/' + imageID   
    const request = new Request(url, {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            window.location.reload();
            
        }
    })
    .then(json => {
            getUser(username, dashboard)
            dashboard.setState({hideLoading: true})
            // the resolved promise with the JSON body
        })
    .catch(error => {
        console.log(error);
    }); 
}