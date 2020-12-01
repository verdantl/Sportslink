export const login = (user, global) => {
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
    //@Joanna use this request stuff above i guess
    if (user.state.password === "user" && user.state.usern === "user") {
        global.setState({
            currentUser : user.state.usern
        });
        
        window.location.href = "/dashboard";
    }
    else if (user.state.password === "admin" && user.state.usern === "admin") {
        global.setState({
            currentUser : user.state.usern
        });
        
        window.location.href = "/admin";
    }
    else {
        alert("Please try again");
    }

};

export const signupNext = user => {
    if (user.state.firstName !== "" && user.state.last_name !== "" && user.state.usern !== "" && user.state.password !== "" && user.state.password2 !== "") {
        if (user.state.password === user.state.password2){
            window.location.href = "/onboarding";
        }
        else{
            alert("Passwords do not match.");
        }
            
    }
    else {
        alert("Please fill all fields");
    }

};

export const onboard = user => {
    if (user.state.sport !== "" && user.state.organization !== "" && user.state.location !== "" && user.state.email !== "" && (user.state.checkedRecruiters || user.state.checkedAthlete)){
        alert("Sign up success, please check your email!");
        window.location.href = "/";
    }
    else {
        alert("Please fill all fields");
    }

};

export const change = (user) => {
    if (user.state.newEmail !== ''){
        user.setState({
            userEmail : user.state.newEmail
        });
    }
    if (user.state.newName !== ''){
        user.setState({
            userName : user.state.newName
        });
    }
    if (user.state.newPass !== ''){
        if (user.state.oldPass === user.state.userPass){
            if (user.state.newPass === user.state.newPass2){
                user.setState({
                    userPass : user.state.newPass
                });
            }
            else {
                alert("Password not changed")
            }
            
        }
        else {
            alert("Password not changed")
        }
    }
    if (user.state.newSport !== ''){
        user.setState({
            userSport : user.state.newSport
        });
    }
};

export const forgot = user => {
    if (user.state.email !== "") {
        alert("We'll send you an email.");
    }
    else {
        alert("Please enter an email.");
    }

};

export const barClick = (user) => {
    if (user.state.homeIcon === 'homeIconLight'){
        window.location.href = "/dashboard";
    }
    if (user.state.settingsIcon === 'settingsIconLight'){
        window.location.href = "/settings";
    }
    if (user.state.userIcon === 'userIconLight'){
        window.location.href = "/profile/TheRealLebronJames";
    }
    if (user.state.messageIcon === 'messageIconLight'){
        window.location.href = "/messaging";
    }
    if (user.state.searchIcon === 'searchIconLight'){
        window.location.href = "/search";
    }
    if (user.state.exitIcon === 'exitIconLight'){
        window.location.href = "/";
    }
};

export const search = () => {
    window.location.href = '/search';
}
