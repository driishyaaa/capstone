import React from "react";
// import { Link } from "react-router-dom";
function Nav() {
    return (
    <nav className="nav">
        <div>
            <img src='Logo.png'/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="$">Order Online</a></li>
                <li><a href="@">Login</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;