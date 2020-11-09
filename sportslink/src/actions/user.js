export const login = (user, global) => {
    console.log(global.state.users[1].name)
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
    if (user.state.firstName !== "" && user.state.last_name !== "" && user.state.usern !== "" && user.state.password !== "") {
        window.location.href = "/onboarding";
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
            user.setState({
                userPass : user.state.newPass
            });
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
        window.location.href = "/profile/leb";
    }
    if (user.state.messageIcon === 'messageIconLight'){
        window.location.href = "/messaging";
    }
};

export const search = () => {
    window.location.href = '/search';
}
