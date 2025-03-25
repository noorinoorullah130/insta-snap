import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Left from "../../components/Left/Left";

const Dashboard = ({ setLoggedUser }) => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem("users")) || [];
        const loggedInUser = allUsers.find((u) => u.id === parseInt(id));

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        setUser(loggedInUser);
        setLoggedUser(loggedInUser);
    }, []);

    return (
        <div className="dashboard">
            <Header />
            <Left />
            <div className="main-content">
                <h1>User: {user.name}</h1>
            </div>
        </div>
    );
};

export default Dashboard;
