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
