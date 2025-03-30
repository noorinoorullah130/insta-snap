import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const [newUser, setNewUser] = useState({
        id: Date.now(),
        name: "",
        lastName: "",
        email: "",
        password: "",
        image: null,
        posts: [],
        friends: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existedEmail = users.some(
            (user) => user.email.toLowerCase() === newUser.email.toLowerCase()
        );

        if (existedEmail) {
            alert(
                "This email is already registered. Please use a different email."
            );
            return;
        }

        const updatedUser = [...users, newUser];

        setUsers(updatedUser);

        localStorage.setItem("users", JSON.stringify(updatedUser));

        alert("New User added");

        navigate("/");

        console.log(updatedUser);

        setNewUser({
            name: "",
            lastName: "",
            email: "",
            password: "",
            image: null,
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewUser((prev) => ({
                    ...prev,
                    image: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="sign-up">
            <h1>Welcome to InstaSnap</h1>
            <div className="sign-up-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}
                        id="name"
                        placeholder="Enter your name"
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={newUser.lastName}
                        onChange={handleChange}
                        id="lastName"
                        placeholder="Enter your Last Name"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                        id="email"
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Enter your password"
                        required
                    />

                    <label htmlFor="image">Upload Image:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageUpload}
                        id="image"
                    />

                    <button type="submit">Sign Up</button>
                </form>
                <p onClick={() => navigate("/")}>
                    Already have an account?{" "}
                    <strong className="sign-in-msg">Sign In</strong>
                </p>
            </div>
            <p className="footer">
                © {new Date().getFullYear()}, &hearts; made by{" "}
                <strong>Noorullah Noori</strong>.
            </p>
        </div>
    );
};

export default SignUp;
