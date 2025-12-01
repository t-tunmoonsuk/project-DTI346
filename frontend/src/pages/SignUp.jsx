import React, { useState } from "react";
import "./SignUp.css";
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="login-container">

            {/* ส่วนซ้าย: รูปภาพ */}
            <div className="login-left">
                <img src={loginImage} alt="preview" className="login-image" />
            </div>

            {/* ส่วนขวา: ฟอร์ม Signup */}
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

                <button className="login-btn">Sign Up</button>

                <p className="login-text">
                    Have an Account? <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
