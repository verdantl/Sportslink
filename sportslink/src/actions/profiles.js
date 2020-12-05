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

//In progress
export const updateUserInfo = (formComp) => {
    const url = "/api/users"
};
