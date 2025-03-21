import React, { useState } from "react";
import "./SignIn.css";
import users from "../../data/users";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(
            (user) =>
                user.email === formData.email &&
                user.password === formData.password
        );

        if (user) {
            console.log("Logged In User", user);
            navigate(`/dashboard/${user.id}`);
        } else {
            alert("Email or Password is invalid!");
        }
    };

    return (
        <div className="sign-in">
            <h1>Welcome to InstaSnap</h1>
            <div className="sign-in-container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        placeholder="Enter your email"
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p onClick={() => navigate("/signup")}>
                    Already have an account?{" "}
                    <strong className="sign-in-msg">Sign Up</strong>
                </p>
            </div>
            <p className="footer">
                © {new Date().getFullYear()}, &hearts; made by{" "}
                <strong>Noorullah Noori</strong>.
            </p>
        </div>
    );
};

export default SignIn;
