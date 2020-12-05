//postList is the "this" object, which is the "this" in a React component
export const getPosts = (dashboard) => {
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