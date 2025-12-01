import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();

    // ใช้ loggedInUser ของ mockAuth
    const loggedInUser = localStorage.getItem("loggedInUser");

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser"); // ลบ user
        navigate("/login"); // กลับหน้า login
    };

    if (loggedInUser) {
        return (
            <button
                onClick={handleLogout}
                style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px 20px",
                    border: "2px solid black",
                    borderRadius: "8px"
                }}
            >
                Logout
            </button>
        );
    }

    return (
        <Link to="/login">
            <button
                style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px 20px",
                    border: "2px solid black",
                    borderRadius: "8px"
                }}
            >
                Login
            </button>
        </Link>
    );
}

export default LoginButton;
