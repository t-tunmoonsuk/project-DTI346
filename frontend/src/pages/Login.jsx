import React, { useState } from "react";
import "./Login.css";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>

                <input type="text" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />

                <button className="login-btn">Login</button>
            </div>
        </div>
    );
}
export default Login;