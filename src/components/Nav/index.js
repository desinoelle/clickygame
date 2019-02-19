import React from "react";
import "./index.css";

function Nav(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Kitty Cat Clicky Game</h1>
                <p className="lead message">{props.message}</p>
            </div>
            <div className="container">
                <h3>Top Score: {props.topScore}</h3>
                <h3>Current Score: {props.currentScore}</h3>
            </div>
        </div>
        
    );
}

export default Nav;