import React from "react";
import "./index.css";

function Cat(props) {
    return(
        <div id={props.id} className="img-container">
          <img alt="Cat" src={props.src} />
        </div>
    );
}

export default Cat;