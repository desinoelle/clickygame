import React from "react";

function Nav(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Kitty Cat Clicky Game!</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="message">{props.message}</p>
                        </div>
                        <div className="col">
                            <p className="score">Score: {props.currentScore}</p>
                            <p className="top-score">Top Score: {props.topScore}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;