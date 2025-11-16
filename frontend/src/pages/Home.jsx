import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>ยินดีต้อนรับ!</p>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Home;