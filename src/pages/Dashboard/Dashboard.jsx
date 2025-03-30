import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Left from "../../components/Left/Left";
import Post from "../../components/Post/Post";
import Suggestions from "../../components/Suggestions/Suggestions";

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

    return (
        <div className="dashboard">
            <Header />
            <Left />
            <div className="main-content">
                <div className="all-posts">
                    <Post />
                </div>

                <div className="suggestions-container">
                    <Suggestions />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
