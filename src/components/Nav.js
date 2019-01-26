import React from "react";

function Nav() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Kitty Cat Clicky Game!</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="instructions">Click on an image to begin!</p>
                        </div>
                        <div className="col">
                            <p className="score">Score: </p>
                            <p className="top-score">Top Score: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;