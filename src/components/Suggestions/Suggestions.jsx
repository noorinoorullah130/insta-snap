import React, { useState } from "react";

import "./Suggestions.css";
import Loader from "../../Common/Loader";

const Suggestions = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const allSuggestedUsers = users.filter((user) => {
        return (
            user.id !== loggedInUser.id &&
            !(loggedInUser.friends || []).some(
                (friend) => friend.id === user.id
            )
        );
    });

    const handleAddFriend = (friendToAdd) => {
        const updatedLoggedInUser = {
            ...loggedInUser,
            friends: [...(loggedInUser.friends || []), friendToAdd],
        };

        const updatedUsers = users.map((user) => {
            if (user.id === loggedInUser.id) {
                return updatedLoggedInUser;
            }
            return user;
        });

        setUsers(updatedUsers);

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(updatedLoggedInUser)
        );

        console.log(updatedUsers);
    };

    if (users.length === 0) {
        return (
            <div className="suggestions">
                <h1>Suggestions</h1>
                <Loader />
            </div>
        );
    }

    if (allSuggestedUsers.length === 0) {
        return (
            <div className="suggestions">
                <h1>Suggestions</h1>
                <p>No suggestions available.</p>
            </div>
        );
    }

    return (
        <div className="suggestions">
            <h1>Suggestions</h1>
            {allSuggestedUsers.map((user) => (
                <div className="suggest" key={user.id}>
                    <img src={user.image} alt="" />
                    <div className="suggest-details">
                        <h2>{user.name}</h2>
                        <button onClick={() => handleAddFriend(user)}>
                            Add Friend
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Suggestions;
