import React from "react";
import "./index.css";

function Cat(props) {
    return(
        <span onClick={() => props.setClicked(props.id)} className="img-container">
          <img alt="Cat" src={props.src} />
        </span>
    );
}

export default Cat;