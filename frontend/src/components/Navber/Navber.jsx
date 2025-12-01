import React, { useState } from "react";
import "./Navber.css"
import { Link } from "react-router-dom";
import {
    FaHome,
    FaSearch,
    FaShoppingCart,
    FaPaperPlane,
    FaBell,
    FaPlusSquare,
    FaUserCircle
} from "react-icons/fa";
function Navbar() {
    const [active, setActive] = useState("home");
    const menu = [
        { id: "home", label: "home", icon: <FaHome />, path: "/" },
        { id: "search", label: "search", icon: <FaSearch />, path: "/search" },
        { id: "cart", label: "shopping cart", icon: <FaShoppingCart />, path: "/cart" },
        { id: "send", label: "message", icon: <FaPaperPlane />, path: "/send" },
        { id: "bell", label: "notification", icon: <FaBell />, path: "/bell" },
        { id: "add", label: "post", icon: <FaPlusSquare />, path: "/add" },
        { id: "user", label: "user", icon: <FaUserCircle />, path: "/user" }
    ];
    return (
        <div className="sidebar">
            {menu.map(item => (
                <Link
                    to={item.path}
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`sidebar-item ${active === item.id ? "active" : ""}`}
                >
                    <div className="icon">{item.icon}</div>
                    <span className="label">{item.label}</span>
                </Link>
            ))}
        </div>
    );
}
export default Navbar;