import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <ul className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        Google Books
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/search" className="nav-link">
                                    Search
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/saved" className="nav-link">
                                    Saved
                                </Link>
                            </li>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;