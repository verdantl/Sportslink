import { getUser } from "./profiles";

export const addExperience = (experience, username, dashboard) => {
    const url = "/api/experience/" + username
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify(experience),
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
            window.location.reload();
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        getUser(username, dashboard)
        dashboard.setState({hideLoading: true})
        
    })
    .catch(error => {
        console.log(error);
    });
};

export const removeExperience = (experienceID, username, dashboard) => {
    const url = "/api/experience/" + username + '/' + experienceID
    const request = new Request(url, {
        method: "DELETE",
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
            window.location.reload();
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        getUser(username, dashboard)
        dashboard.setState({hideLoading: true})
        
    })
    .catch(error => {
        console.log(error);
    });
}

export const updateExperience = (attributes, username, dashboard) => {
    const url = "/api/experience/" + username + '/' + attributes._id
    console.log(attributes)
    console.log(url)
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(attributes),
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
            window.location.reload();
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        getUser(username, dashboard)
        dashboard.setState({hideLoading: true})
        
    })
    .catch(error => {
        console.log(error);
    });
}