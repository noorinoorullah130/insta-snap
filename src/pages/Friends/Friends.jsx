import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Left from "../../components/Left/Left";
import "./Friends.css";
import Friend from "../../components/Friend/Friend";
import Loader from "../../Common/Loader";

const Friends = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const handleRemoveFriend = (removeFriend) => {
        const updatedLoggedInUser = {
            ...loggedInUser,
            friends: loggedInUser.friends.filter(
                (fr) => fr.id !== removeFriend.id
            ),
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
    };

    if (users.length === 0) {
        return (
            <>
                <Header />
                <Left />
                <div className="friends">
                    <h1>Friends</h1>
                    <div className="all-friends">
                        <Loader />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <Left />
            <div className="friends">
                <h1>Friends</h1>
                <div className="all-friends">
                    {loggedInUser.friends?.length > 0 ? (
                        <Friend
                            friends={loggedInUser.friends}
                            handleRemoveFriend={handleRemoveFriend}
                        />
                    ) : (
                        <p>No friends yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Friends;
