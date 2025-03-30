import React from "react";
import "./Comment.css";

import SendIcon from "../../assets/sent.png";

const Comment = () => {
    return (
        <div className="comment">
            <input type="text" placeholder="Write a comment..." />
            <img src={SendIcon} />
        </div>
    );
};

export default Comment;
