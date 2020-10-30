export const login = user => {
    console.log("verification");
    
    if (user.state.password == "123"){
        console.log("logged in")
    }
    else {
        console.log("wrong password")
    }
    
  };