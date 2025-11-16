import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>ยินดีต้อนรับ!</p>
            <LoginButton />
        </div>
    );
}

export default Home;