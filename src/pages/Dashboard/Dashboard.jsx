import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
    const { id } = useParams();

    console.log(id);

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = allUsers.find((u) => u.id === parseInt(id));

    console.log(allUsers);
    console.log(user);
    console.log(user.name);

    return <div>Dashboard {user.name}</div>;
};

export default Dashboard;
