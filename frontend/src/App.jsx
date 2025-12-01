import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navber/Navber";
import SearchPage from "./pages/search/SearchPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import PostPage from "./pages/post/PostPage";
import ShopPage from "./pages/shopping/ShopPage";
import MessagePage from "./pages/message/MessagePage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/add" element={<PostPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/cart" element={<ShopPage />} />
                <Route path="/send" element={<MessagePage />} />
                <Route path="/bell" element={<NotificationPage />} />
                <Route path="/user" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}