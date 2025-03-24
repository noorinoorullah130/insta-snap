import React from "react";
import Header from "../../components/Header/Header";
import "./Profile.css";

const Profile = ({ loggedUser }) => {
    console.log(loggedUser);
    console.log(loggedUser.id);

    return (
        <>
            <Header />
            <div className="profile">
                <div className="details-container">
                    <div className="profile-details">
                        <h3>ID: {loggedUser.id}</h3>
                        <h3>Name: {loggedUser.name}</h3>
                        <h3>Email: {loggedUser.email}</h3>
                    </div>
                    <div className="all-posts"></div>
                </div>
            </div>
        </>
    );
};

export default Profile;
