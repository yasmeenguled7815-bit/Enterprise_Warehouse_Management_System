//src/pages/login.js
import React, { useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

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
		   <div className="login-container">

		     <div className="login-box">

		       <h1>EWMS Login</h1>

		       <input
		         type="text"
		         placeholder="Username"
		         onChange={(e) => setUsername(e.target.value)}
		       />

		       <input
		         type="password"
		         placeholder="Password"
		         onChange={(e) => setPassword(e.target.value)}
		       />

			   <button onClick={handleLogin}>
			     Login
			   </button>

		     </div>

		   </div>
		);
}

export default Login;
