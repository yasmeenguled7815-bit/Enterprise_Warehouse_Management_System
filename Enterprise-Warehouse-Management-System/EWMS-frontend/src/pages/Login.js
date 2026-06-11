//src/pages/login.js

import React, { useState } from "react";
import api from "../api/axiosConfig";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {
                username,
                password
            });

            localStorage.setItem("token", res.data);
            onLogin();
        } catch (err) {
            alert("Login failed");
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Warehouse Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;
