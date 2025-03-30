import React from "react";

import "./Suggestions.css";
import ProfilePicture from "../../assets/users-images/profile pic.webp";

const Suggestions = () => {
    return (
        <div className="suggestions">
            <h1>Suggestions</h1>
            <div className="suggest">
                <img src={ProfilePicture} alt="" />
                <div className="suggest-details">
                    <h2>Noorullah</h2>
                    <button>Add Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
