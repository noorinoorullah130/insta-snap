import React from "react";
import Header from "../../components/Header/Header";
import Left from "../../components/Left/Left";
import "./Friends.css";
import Friend from "../../components/Friend/Friend";

const Friends = () => {
    return (
        <>
            <Header />
            <Left />
            <div className="friends">
                <h1>Friends</h1>
                <div className="all-friends">
                    <Friend />
                    <Friend />
                </div>
            </div>
        </>
    );
};

export default Friends;
