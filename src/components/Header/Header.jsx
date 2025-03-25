import React, { useEffect, useState } from "react";
import "./Header.css";
import InstagramIcon from "../../assets/instagram-brands.svg";
import HomeIcon from "../../assets/house-solid.svg";
import FriendsIcon from "../../assets/user-group-solid.svg";
import PhotoIcon from "../../assets/image-solid.svg";
import ProfilePic from "../../assets/users-images/profile pic.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [user, setUser] = useState({});
    const [active, setActive] = useState("Home");

    useEffect(() => {
        const loggedUser =
            JSON.parse(localStorage.getItem("loggedInUser")) || [];
        setUser(loggedUser);
    }, []);

    const handleActive = (element) => {
        setActive(element);
    };

    return (
        <header className="header">
            <h1>
                <img src={InstagramIcon} /> InstaSnap
            </h1>
            <div className="menus">
                <NavLink to={`/dashboard/${user.id}`}>
                    <img
                        src={HomeIcon}
                        className={active === "Home" ? "active" : ""}
                        onClick={() => handleActive("Home")}
                        alt="svg icon"
                    />
                </NavLink>
                <NavLink>
                    <img
                        src={FriendsIcon}
                        className={active === "Friend" ? "active" : ""}
                        onClick={() => handleActive("Friend")}
                        alt="svg icon"
                    />
                </NavLink>
                <NavLink>
                    <img
                        src={PhotoIcon}
                        className={active === "Photo" ? "active" : ""}
                        onClick={() => handleActive("Photo")}
                        alt="svg icon"
                    />
                </NavLink>
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
