import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp.jsx/SignUp";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard/:id" element={<Dashboard />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </div>
    );
};

export default App;
