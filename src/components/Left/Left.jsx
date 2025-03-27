import React from "react";
import "./Left.css";
import ProfilePic from "../../assets/users-images/profile pic.webp";
import HomeIcon from "../../assets/house-solid.svg";
import FriendsIcon from "../../assets/user-group-solid.svg";
import PhotoIcon from "../../assets/image-solid.svg";
import LogoutIcon from "../../assets/right-from-bracket-solid.svg";
import NewPostIcon from "../../assets/new-post.png";
import { NavLink } from "react-router-dom";

const Left = () => {
    return (
        <div className="left">
            <NavLink to="/profile" className="menus">
                <img src={HomeIcon} />
                <h3>Home</h3>
            </NavLink>

            <NavLink to="/profile" className="menus">
                <img className="profile-pic" src={ProfilePic} />
                <h3>Noorullah</h3>
            </NavLink>

            <NavLink>
                <div className="menus">
                    <img src={NewPostIcon} />
                    <h3>New Post</h3>
                </div>
            </NavLink>

            <NavLink>
                <div className="menus">
                    <img src={FriendsIcon} />
                    <h3>Friends</h3>
                </div>
            </NavLink>

            <NavLink>
                <div className="menus">
                    <img src={PhotoIcon} />
                    <h3>Images</h3>
                </div>
            </NavLink>

            <NavLink>
                <div className="menus">
                    <img src={LogoutIcon} />
                    <h3>Logout</h3>
                </div>
            </NavLink>
        </div>
    );
};

export default Left;
