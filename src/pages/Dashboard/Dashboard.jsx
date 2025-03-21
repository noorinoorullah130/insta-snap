import React from "react";

const Dashboard = ({ loggedInUser, setLoggedInUser }) => {
    const handleLogout = () => {
        setLoggedInUser(null);
        alert("Logged out successfully!");
    };

    if (!loggedInUser) {
        return <p>Please log in to see your dashboard.</p>;
    }

    return (
        <div>
            <h1>Welcome, {loggedInUser.username}!</h1>
            <p>Email: {loggedInUser.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
