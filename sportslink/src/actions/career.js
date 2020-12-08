import { getUser } from "./profiles";

export const addCareer = (career, username, dashboard) => {
    const url = "/api/career/" + username
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify({"career": career}),
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
            alert("Could not update user");
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        getUser(username, dashboard)
        
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
            alert("Could not update user");
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        getUser(username, dashboard)
        
    })
    .catch(error => {
        console.log(error);
    });
}