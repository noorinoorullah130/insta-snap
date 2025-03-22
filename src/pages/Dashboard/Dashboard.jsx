import React from "react";
import "./Dashboard.css";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Left from "../../components/Left/Left";

const Dashboard = () => {
    const { id } = useParams();

    console.log(id);

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = allUsers.find((u) => u.id === parseInt(id));

    return (
        <div className="dashboard">
            <Header />
            <Left />
            <div className="main-content"></div>
        </div>
    );
};

export default Dashboard;
