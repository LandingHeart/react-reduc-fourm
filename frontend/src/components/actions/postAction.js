import { FETCH_POST, NEW_POST } from "./types";

export const fetchPost = () => (dispatch) => {
    fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((posts) =>
            dispatch({
                type: FETCH_POST,
                payload: posts,
            })
        )
        .catch((err) => console.log(err));
};

export const createPost = (postData) => (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(postData),
    })
        .then((res) => res.json())
        .then((post) =>
            dispatch({
                type: NEW_POST,
                payload: post,
            })
        );
};
