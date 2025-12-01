import React, { useState } from "react";
import "./SignUp.css";
import loginImage from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { mockSignUp } from "../services/auth";

function SignUp({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            setError("รหัสผ่านไม่ตรงกัน");
            return;
        }

        const result = mockSignUp(email, password, username);
        console.log("SignUp result:", result);

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
                    type="text"
                    placeholder="Username"
                    className="login-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="login-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button className="login-btn" onClick={handleSignUp}>
                    Sign Up
                </button>

                <p className="signup-text">
                    Have an Account? <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
