import React, { useEffect, useState } from "react";
import "./Header.css";
import InstagramIcon from "../../assets/instagram-brands.svg";
import ProfilePic from "../../assets/users-images/profile pic.webp";

const Header = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const loggedUser =
            JSON.parse(localStorage.getItem("loggedInUser")) || [];
        setUser(loggedUser);
    }, []);

    return (
        <header className="header">
            <h1>
                <img src={InstagramIcon} /> InstaSnap
            </h1>

            <input type="text" placeholder="Search anything..." />

            <div className="profile-picture">
                <h3>
                    {user.name} {user.lastName}
                </h3>
                <img src={ProfilePic} alt="" />
            </div>
        </header>
    );
};

export default Header;
