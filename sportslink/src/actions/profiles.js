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
            userList.setState({ userList: json.students});
        })
        .catch(error => {
            console.log(error);
        });
}

//In progress
export const updateUser = (formComp, field) => {
    const value = field.value;
    const name = field.name;

    formComp.setState({
        [name]: value
    });
};