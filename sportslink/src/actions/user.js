import blankpic from '../components/images/blankpic.jpg'
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
            user.setState({loginError : "Couldn't login."})
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
    if (user.state.firstName === "" || user.state.last_name === "" || user.state.password === "" || user.state.password2 === ""){
        user.setState({firstNameError : "Ensure all fields are filled properly", last_nameError : "Ensure all fields are filled properly", passwordError : "Ensure all fields are filled properly", password2Error : "Ensure all fields are filled properly"})
    } else if (user.state.firstNameError === "" && user.state.last_nameError == "" && user.state.passwordError === "" && user.state.password2Error === "") {
        const request = "/api/accounts/" + user.state.usern;

        fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } 
        })
        .then(json => {
            if (json.user === null) {
                app.setState({ signUp: [{fname: user.state.firstName, lname: user.state.last_name, uname: user.state.usern, pwd: user.state.password}] });
                user.props.history.push("/onboarding");
            } else {
                user.setState({usernError : "Username already taken."})
            }
        })
        .catch(error => {
            console.log(error);
            user.setState({firstNameError : "Ensure all fields are filled properly", last_nameError : "Ensure all fields are filled properly", passwordError : "Ensure all fields are filled properly", password2Error : "Ensure all fields are filled properly"})
        });            
    } 
};

export const onboard = (user, app) => {
    if (user.state.sport === "" || user.state.organization === "" || user.state.location === "" || user.state.email === "") {
        user.setState({sportError : "Ensure all fields are filled properly", organizationError : "Ensure all fields are filled properly", locationError : "Ensure all fields are filled properly", emailError : "Ensure all fields are filled properly"})
    } else if (!validator.isEmail(user.state.email)){
        user.setState({emailError : "Please enter a valid email."})
    } else if (user.state.sportError === "" && user.state.organizationError === "" && user.state.locationError === "" && user.state.emailError === "" && (user.state.checkedRecruiters || user.state.checkedAthlete)){
        let newAccount = {email: user.state.email, username: app.state.signUp[0].uname, password: app.state.signUp[0].pwd}
        let newUser = {player: user.state.checkedAthlete, username: app.state.signUp[0].uname, name: app.state.signUp[0].fname + " " + app.state.signUp[0].lname, location: user.state.location, organization: user.state.organization, sports: user.state.sport, image: blankpic}
        
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
                app.setState({ signUp: [], currentUser: data[0].username});
                alert("Sign up success");
                user.props.history.push("/dashboard");
            }
        }).catch(error => {
            console.log(error);
            user.setState({sportError : "Ensure all fields are filled properly", organizationError : "Ensure all fields are filled properly", locationError : "Ensure all fields are filled properly", emailError : "Ensure all fields are filled properly"})
        });
    }

};

export const updateAccount = (user) => {
    const url = "/api/accounts/" + user.props.app.state.currentUser
    let changes = {}

    if (user.state.newEmail !== '') {
        if (!validator.isEmail(user.state.newEmail)){
            user.setState({newEmailError: "Invalid email."})
        } else {
            changes.email = user.state.newEmail
            user.setState({newEmailError: ""})
        }
    }
    if (user.state.newPass !== ''){
        if (user.state.newPass === user.state.newPass2){
            changes.oldpassword = user.state.oldPass
            changes.password = user.state.newPass
            user.setState({newPassError: "", newPass2Error: ""})
        }
        else {
            user.setState({newPassError: "Passwords do not match.", newPass2Error: "Passwords do not match."})
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
        getAccount(user.props.app.state.currentUser, user)
    })
    .catch(error => {
        console.log(error);
    });
};


export const getAccount = (user, app) => {
    const url = '/api/accounts/' + user;
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
                
            } else {
                alert("Could not get account");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            if (json.user !== null) {
                app.setState({ account: json.user});
            } else {
                app.setState({ account: {}});
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export const forgot = user => {
    if (user.state.email !== "") {
        if (!validator.isEmail(user.state.email)){
            user.setState({emailError : "Please enter a valid email."})
        } else {
            alert("We'll send you an email.");
        }
    }
    else {
        user.setState({emailError : "Please enter an email."})
    }

};


export const search = () => {
    window.location.href = '/search';
}
