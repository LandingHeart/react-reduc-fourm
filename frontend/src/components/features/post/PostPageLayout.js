import React from "react";
import Post from "./Post";
import "./post.css";
export default function PostPageLayout() {
    return (
        <div className="post-content">
            <div className="col-1"> sidebar</div>
            <div className="col-2">
                <Post />
            </div>
            <div className="col-3">side bar</div>
        </div>
    );
}
