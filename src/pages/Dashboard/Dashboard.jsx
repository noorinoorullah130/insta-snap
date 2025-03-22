import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
    const { id } = useParams();

    console.log(id);

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = allUsers.find((u) => u.id === parseInt(id));

    return (
        <main className="dashboard">
            {/* <h1>
                Dashboard: {user.id} - {user.name} - {user.email}
            </h1> */}
        </main>
    );
};

export default Dashboard;
