export const getUsers = (userList) => {
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
            userList.setState({ userList: json.users});
        })
        .catch(error => {
            console.log(error);
        });
}

//In progress
export const updateUserInfo = (formComp) => {
    const url = "/api/users"
};

// A function to send a POST request with a new student
export const addStudent = (formComp, dashboardComp) => {
    // the URL for the request
    const url = "/api/students";

    // The data we are going to send in our request
    const student = formComp.state

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(student),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                dashboardComp.setState({
                    message: {
                        body: "Success: Added a student.",
                        type: "success"
                    }
                });
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                dashboardComp.setState({
                    message: {
                        body: "Error: Could not add student.",
                        type: "error"
                    }
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};