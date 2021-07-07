import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/artist">Artist</Link>
            <Link to="/forum">Forum</Link>
        </div>
    );
}
