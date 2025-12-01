import React from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function AppContent() {
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    // ซ่อน navbar ใน login / signup
    const hideNavbar =
        location.pathname === "/login" || location.pathname === "/signup";

    // ฟังก์ชันป้องกันหน้า
    function ProtectedRoute({ element }) {
        return isLoggedIn ? element : <Navigate to="/login" replace />;
    }

    return (
        <>
            {!hideNavbar && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/cart" element={<ShopPage />} />

                <Route path="/add" element={<ProtectedRoute element={<PostPage />} />} />
                <Route path="/send" element={<ProtectedRoute element={<MessagePage />} />} />
                <Route path="/bell" element={<ProtectedRoute element={<NotificationPage />} />} />
                <Route path="/user" element={<ProtectedRoute element={<ProfilePage />} />} />

                {/* auth pages */}
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}
