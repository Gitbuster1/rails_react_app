import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">All Posts</Link>
                {" | "}
                <Link to="posts/new">New Post</Link>
            </nav>
        </div>
    );
}

export default NavBar;
