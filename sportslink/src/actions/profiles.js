import { getPosts } from "./posts";

export const getUsers = (dashboard) => {
    const url = '/api/users';
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get students");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            dashboard.setState({ users: json.users});
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
                console.log(res)
                // return a promise that resolves with the JSON body
                return res.json();
                
            } else {
                alert("Could not get user");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            dashboard.setState({ user: json});
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
            alert("Could not update user");
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
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
            alert("Could not delete user");
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
                alert("Could not delete user");
            }
        })
        .then(json => {
            getUsers(dashboard)
            // the resolved promise with the JSON body
        })
    })
    .catch(error => {
        console.log(error);
    }); 
}