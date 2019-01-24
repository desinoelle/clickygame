import React from "react";

function Nav() {
    return (
        <div className="container">
            <div className="row">
            <nav className="navbar">
                <ul>
                    <li className="brand"><a href="/">Clicky Game</a></li>
                    <li className="message">Click an image to begin!</li>
                    <li className="score">Score: 0 | Top Score: 0</li>
                </ul>
            </nav>
            </div>
            <div className="row">
            <header class="header">
                <h1>Clicky Game!</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </header>
            </div>
        </div>
    );
}

export default Nav;