import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Loader from "../../Common/Loader";
import "./Profile.css";

const Profile = ({ loggedUser }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (loggedUser) {
            setUser(loggedUser);
        } else {
            const loggedInUser = JSON.parse(
                localStorage.getItem("loggedInUser")
            );
            setUser(loggedInUser);
        }
    }, [loggedUser]);

    if (!user) {
        return (
            <>
                <Header />
                <div className="profile">
                    <div className="details-container">
                        <Loader />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="profile">
                <div className="details-container">
                    <div className="profile-details">
                        <img src={user.image} alt="profile image" />
                        <div>
                            <h1>
                                {user.name} {user.lastName}
                            </h1>
                            <h2>{user.email}</h2>
                        </div>
                    </div>
                    <div className="all-posts"></div>
                </div>
            </div>
        </>
    );
};

export default Profile;
