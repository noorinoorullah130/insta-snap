import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp.jsx/SignUp";
import Profile from "./pages/Profile/Profile";
import NewPost from "./pages/NewPost/NewPost";
import Friends from "./pages/Friends/Friends";

const App = () => {
    const [loggedUser, setLoggedUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("loggedInUser")) || [];
        if (user) {
            setLoggedUser(user);
        }
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route
                    path="/dashboard/:id"
                    element={<Dashboard setLoggedUser={setLoggedUser} />}
                />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/profile"
                    element={<Profile loggedUser={loggedUser} />}
                />
                <Route path="/newpost" element={<NewPost />} />
                <Route path="/friends" element={<Friends />} />
            </Routes>
        </div>
    );
};

export default App;
