import React from "react";
import "./Friend.css";

import ProfilePicture from "../../assets/users-images/profile pic.webp";

const Friend = () => {
    return (
        <div className="friend">
            <div className="friend-container">
                <img src={ProfilePicture} alt="" />
                <div className="friend-details">
                    <h2>Noorullah</h2>
                    <button>Remove Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Friend;
