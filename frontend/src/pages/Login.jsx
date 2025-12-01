import React, { useState } from "react";
import "./Login.css";
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-container">

            {/* ส่วนซ้าย: รูปภาพ */}
            <div className="login-left">
                <img src={loginImage} alt="preview" className="login-image" />
            </div>

            {/* ส่วนขวา: ฟอร์ม Login */}
            <div className="login-right">
                <h1 className="logo-text">easysell</h1>

                <input type="text" placeholder="Username" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />

                <button className="login-btn">Log in</button>

                <p className="forgot-text">Forgot Password?</p>

                <p className="signup-text">
                    Don’t have an Account? <Link to="/signup">Sign Up</Link>

                </p>
            </div>
        </div>
    );
}
export default Login;