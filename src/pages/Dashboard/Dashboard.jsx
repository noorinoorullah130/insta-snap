import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Left from "../../components/Left/Left";
import Post from "../../components/Post/Post";
import Suggestions from "../../components/Suggestions/Suggestions";
import Loader from "../../Common/Loader";

const Dashboard = ({ setLoggedUser }) => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem("users")) || [];
        const loggedInUser = allUsers.find((u) => u.id === parseInt(id));

        setUser(loggedInUser);
        setLoggedUser(loggedInUser);

        console.log(loggedInUser);
    }, []);

    // for all posts
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // 1. Get your posts (empty array if none exist)
    const myPosts = loggedInUser.posts || [];

    // 2. Get all friends' posts
    const friendsPosts = [];
    (loggedInUser.friends || []).forEach((friend) => {
        const friendData = users.find((user) => user.id === friend.id);
        if (friendData?.posts) {
            friendsPosts.push(...friendData.posts);
        }
    });

    // 3. Combine and sort by newest first
    const allPosts = [...myPosts, ...friendsPosts].sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    console.log(allPosts); // This contains your combined feed

    if (!users && !allPosts) {
        return (
            <div className="dashboard">
                <Header />
                <Left />
                <div className="main-content">
                    <div className="all-posts">
                        <Loader />
                    </div>

                    <div className="suggestions-container">
                        <Suggestions />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard">
            <Header />
            <Left />
            <div className="main-content">
                <div className="all-posts">
                    {allPosts.length > 0 ? (
                        <Post allPosts={allPosts} />
                    ) : (
                        <p>
                            No posts available. Please add new posts or add new
                            friend.
                        </p>
                    )}
                </div>

                <div className="suggestions-container">
                    <Suggestions />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
