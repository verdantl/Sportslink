const validator = require('validator')

// Send a request to check if a user is logged in through the session cookie
export const checkSession = (app) => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const login = (user, app) => {
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(user.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser });
            }  
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null
            });
        })
        .catch(error => {
            console.log(error);
        });
};

export const signupNext = (user, app) => {
    if (user.state.password.length < 4) {
        alert("Minimum password length is 4.");
    }
    if (user.state.firstName !== "" && user.state.last_name !== "" && user.state.usern !== "" && user.state.password !== "" && user.state.password2 !== "") {
        const request = "/api/accounts/" + user.state.usern;

        fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } 
        })
        .then(json => {
            if (json.user === null) {
                if (user.state.password === user.state.password2){
                    app.setState({ signUp: [{fname: user.state.firstName, lname: user.state.last_name, uname: user.state.usern, pwd: user.state.password}] });
                    user.props.history.push("/onboarding");
                }
                else{
                    alert("Passwords do not match.");
                }
            } else {
                alert("Username already taken.")
            }
        })
        .catch(error => {
            console.log(error);
        });            
    }
    else {
        alert("Please fill all fields");
    }

};

export const onboard = (user, app) => {
    if (!validator.isEmail(user.state.email)){
        alert("Please enter a valid email.")
    }
    else if (user.state.checkedRecruiters && user.state.checkedAthlete) {
        alert("Please select one role only.");
    }
    else if (user.state.sport !== "" && user.state.organization !== "" && user.state.location !== "" && user.state.email !== "" && (user.state.checkedRecruiters || user.state.checkedAthlete)){
        let newAccount = {email: user.state.email, username: app.state.signUp[0].uname, password: app.state.signUp[0].pwd}
        let newUser = {player: user.state.checkedAthlete, username: app.state.signUp[0].uname, name: app.state.signUp[0].fname + " " + app.state.signUp[0].lname, location: user.state.location, organization: user.state.organization, sports: user.state.sport}
        
        const accRequest = new Request("/api/accounts", {
            method: "post",
            body: JSON.stringify(newAccount),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
        const userRequest = new Request("/api/users", {
            method: "post",
            body: JSON.stringify(newUser),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
        Promise.all([
            fetch(accRequest),
            fetch(userRequest)
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
            }));
        }).then(function (data) {
            if (data[0] !== undefined && data[1] !== undefined) {
                app.setState({ signUp: [] });
                alert("Sign up success");
                user.props.history.push("/");
            }
        }).catch(error => {
            console.log(error);
        });
    }
    else {
        alert("Please fill all fields");
    }

};

export const updateAccount = (user) => {
    const url = "/api/accounts/" + user.props.global.state.currentUser
    let changes = {}

    if (user.state.newEmail !== '') {
        changes.email = user.state.newEmail
    }
    if (user.state.newPass !== ''){
        if (user.state.newPass === user.state.newPass2){
            changes.oldpassword = user.state.oldPass
            changes.password = user.state.newPass
        }
        else {
            alert("Passwords not the same")
        }
    }
    
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(changes),
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
            alert("Could not update");
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        console.log(json)
        getAccount(user)
    })
    .catch(error => {
        console.log(error);
    });
};


export const getAccount = (user) => {
    const url = '/api/accounts/' + user.props.global.state.currentUser;
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                console.log(res)
                // return a promise that resolves with the JSON body
                return res.json();
                
            } else {
                alert("Could not get account");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            user.setState({ account: json});
        })
        .catch(error => {
            console.log(error);
        });
}

export const forgot = user => {
    if (user.state.email !== "") {
        alert("We'll send you an email.");
    }
    else {
        alert("Please enter an email.");
    }

};


export const search = () => {
    window.location.href = '/search';
}
