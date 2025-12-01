import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
    return (
        <Link to="/login">
            <button style={{
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
