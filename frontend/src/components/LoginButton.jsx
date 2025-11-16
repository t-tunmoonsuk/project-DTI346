import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
    return (
        <Link to="/login">
            <button style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px"
            }}
            >
                Login
            </button>
        </Link>
    );
}

export default LoginButton;
