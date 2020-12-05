//postList is the "this" object, which is the "this" in a React component
export const getPosts = (dashboard) => {
    const url = '/api/posts';
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            dashboard.setState({ posts: json});
        })
        .catch(error => {
            console.log(error);
        });

}
//creates a new post
export const newPost = (post) => {
    const url = '/api/posts';
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(post),
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
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
        })
        .catch(error => {
            console.log(error);
        });
}

//creates a new post - postcard
export const newComment = (postCard, postID) => {
    const url = '/api/posts/' + postID;
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(postCard),
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
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
        })
        .catch(error => {
            console.log(error);
        });
}
//adds a like???
export const editPostInfo = (dashboard) => {
    const url = '/api/posts';
    console.log('hi')
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            console.log(json)
            dashboard.setState({ posts: json});
        })
        .catch(error => {
            console.log(error);
        });

}

//adds a comment