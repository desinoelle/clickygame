import React from "react";

function Cat(props) {
    return (
      <div className="col">
          <img alt={props.id} 
            src={props.src} 
            clicked={props.clicked}
            className="img-thumbnail"
            onClick={() => props.setClicked(props.id)}/>
      </div>
    );
}

export default Cat;