//src/pages/login.js
import React, { useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function Login() {
	
	const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {
                username,
                password
            });
           
			console.log(res.data);
			
            localStorage.setItem("token", res.data.token);
            
			//onLogin();
			
			navigate("/dashboard");
			
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
                onChange={(e) => setUsername(e.target.value)} />
            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>
        </div>);
}

export default Login;
