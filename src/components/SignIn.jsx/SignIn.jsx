import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
    return (
        <div className="sign-in">
            <h1>Welcome to InstaSnap</h1>
            <div className="sign-in-container">
                <h1>Sign In</h1>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
            <p className="footer">
                © {new Date().getFullYear()}, &hearts; made with by{" "}
                <strong>Noorullah Noori</strong>.
            </p>
        </div>
    );
};

export default SignIn;
