export const login = user => {
    console.log("verification");
    console.log(user);
    if (user.state.password == "user" && user.state.usern == "user"){
        window.location.href = "/dashboard"

    }
    else if (user.state.password == "admin" && user.state.usern == "admin"){
        window.location.href = "/admin"

    }
    else {
        alert("Please try again");
    }

  };