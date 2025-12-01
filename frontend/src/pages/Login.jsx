import React, { useState } from "react";
import "./Login.css";
import loginImage from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { mockLogin } from "../services/auth";

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const result = mockLogin(email, password);

        if (!result.success) {
            setError(result.message);
            return;
        }

        setIsLoggedIn(true);
        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <img src={loginImage} alt="preview" className="login-image" />
            </div>

            <div className="login-right">
                <h1 className="logo-text">easysell</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button className="login-btn" onClick={handleLogin}>
                    Log in
                </button>

                <p className="signup-text">
                    Don’t have an Account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
