import React from "react";
import "./index.css";

function Cat(props) {
    return(
        <span onClick={() => props.setClicked(props.id)} className="float-left m-4">
          <img alt="Cat" src={props.src} className="rounded" />
        </span>
    );
}

export default Cat;