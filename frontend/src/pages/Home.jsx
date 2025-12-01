import React from "react";
import LoginButton from "../components/LoginButton";

function Home() {
    return (
        <div
            style={{
                marginLeft: "200px",
                padding: "20px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%"
                }}
            >
                <LoginButton />
            </div>

            <h1>Home Page</h1>
            <p>ยินดีต้อนรับ!</p>
        </div>
    );
}

export default Home;
