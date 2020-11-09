export const login = user => {
    if (user.state.password === "user" && user.state.usern === "user") {
        window.location.href = "/dashboard";

    }
    else if (user.state.password === "admin" && user.state.usern === "admin") {
        window.location.href = "/admin";

    }
    else {
        alert("Please try again");
    }

};

export const signupNext = user => {
    if (user.state.firstName != "" && user.state.last_name != "" && user.state.usern != "" && user.state.password != "") {
        window.location.href = "/onboarding";
    }
    else {
        alert("Please fill all fields");
    }

};

export const onboard = user => {
    if (user.state.sport != "" && user.state.organization != "" && user.state.location != "" && user.state.email != "" && (user.state.checkedRecruiters || user.state.checkedAthlete)){
        alert("Sign up success, please check your email!");
        window.location.href = "/";
    }
    else {
        alert("Please fill all fields");
    }

};