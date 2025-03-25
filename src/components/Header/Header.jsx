import React, { useEffect, useState } from "react";
import "./Header.css";
import InstagramIcon from "../../assets/instagram-brands.svg";
import HomeIcon from "../../assets/house-solid.svg";
import FriendsIcon from "../../assets/user-group-solid.svg";
import VideoIcon from "../../assets/video-solid.svg";
import PhotoIcon from "../../assets/image-solid.svg";
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
            <div className="menus">
                <img src={HomeIcon} className="active" alt="svg icon" />
                <img src={FriendsIcon} alt="svg icon" />
                <img src={VideoIcon} alt="svg icon" />
                <img src={PhotoIcon} alt="svg icon" />
            </div>
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
